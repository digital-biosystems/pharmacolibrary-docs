<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;macitentan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Macitentan_Bartolucci2021_reference&quot;,&quot;label&quot;:&quot;Bartolucci_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# macitentan

- **generic name:** macitentan
- **ATC codes:** `C02KX04`, `C02KX54`
- **DrugBank:** [DB08932](https://go.drugbank.com/drugs/DB08932) · **PubChem:** [CID 16004692](https://pubchem.ncbi.nlm.nih.gov/compound/16004692)
- **molar mass:** 588.273 g/mol (C19H20Br2N6O4S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Macitentan is a dual endothelin receptor antagonist used in the treatment of pulmonary arterial hypertension (PAH).[L35890] It was first approved by the FDA in 2013. Macitentan differs from its predecessor [bosentan] in part due to its lower risk of hepatotoxicity.

A combination product (Opsynvi) comprising macitentan and [tadalafil] was approved in Canada in October 2021 for the treatment of PAH.[L39105] It was subsequently approved by the FDA in March 2024.[L50622]

**Indication.** Macitentan, alone or in combination with [tadalafil], is indicated for the treatment of pulmonary arterial hypertension (PAH; WHO Group 1) in adult patients of WHO functional class II to III .[L35890, L39105, L50622]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| macitentan | parent | 588.273 | C19H20Br2N6O4S | DrugBank | [16004692](https://pubchem.ncbi.nlm.nih.gov/compound/16004692) | Bartolucci_2021 |
| aprocitentan | metabolite | 546.194 | C16H14Br2N6O4S | PubChem | [25099191](https://pubchem.ncbi.nlm.nih.gov/compound/25099191) | Bartolucci_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 02:31 | 13:22 | 1/0/0 | 0/0/0 | 1/0/1 | 62,180/10,674 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl[aprocitentan], Vd[aprocitentan], formation_rate left at b…</sub><br><sub>route_to: `scholar`</sub> | [Bartolucci_2021_reference](drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md) | parent + 1 metabolite (1-cmt each) | 5 | Bartolucci R et al., A Population Pharmacokinetic Model of M…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01049-3](https://doi.org/10.1007/s40262-021-01049-3) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Lattanzio_2022](drugs/drug_macitentan/pgx_Lattanzio_2022_CYP2C9_safety.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C8** | `Q22` · CL | metabolism | [Lattanzio_2022](drugs/drug_macitentan/pgx_Lattanzio_2022_CYP2C8_Q22.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=macitentan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` metabolism/substrate, `CYP2C9` safety_allele/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Eliminated 50% through urine and 24% through feces.[L39105, A174082] Of the 50% excreted t…”</sub> | prose |
| excretion | kidney | <sub>“…Eliminated 50% through urine and 24% through feces.[L39105, A174082] Of the 50% excreted…”</sub> | prose |

<sub>Actors without a tissue in the table: EDNRA (target), EDNRB (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartolucci_2021.pdf` | Bartolucci R et al., A Population Pharmacokinetic Model of M…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-01049-3](https://doi.org/10.1007/s40262-021-01049-3) | [34159557](https://pubmed.ncbi.nlm.nih.gov/34159557) | The paper is a population PK study for macitentan and reports specific quantitative parameters (Vd 34 L, CL 1.39 L/h) in the abstract, though the full model parameter table is not included in the evidence. |
| `Ahn_2014.pdf` | Ahn LY et al., Pharmacokinetic-pharmacodynamic relatio…, American journal of cardiov… (2014) | popPK | 8 | [10.1007/s40256-014-0081-4](https://doi.org/10.1007/s40256-014-0081-4) | [24906252](https://pubmed.ncbi.nlm.nih.gov/24906252) | The study reports PK parameters for macitentan, but only non-compartmental metrics (tmax, t1/2, AUC, Cmax) are provided in the text, lacking specific clearance (CL) or volume (V) values required for population PK modeling. |
| `Angus_2017.pdf` | Angus JA et al., Distortion of K, Pharmacology research & per… (2017) | pd | 5 | [10.1002/prp2.374](https://doi.org/10.1002/prp2.374) | [29226623](https://www.ncbi.nlm.nih.gov/pubmed/29226623) | metadata signals extractable PD data (EC50) |
| `Li_2019.pdf` | Li YH et al., Functional characterization of 27 CYP3A…, The Journal of pharmacy and… (2019) | pgx | 8 | [10.1111/jphp.13153](https://doi.org/10.1111/jphp.13153) | [31441067](https://www.ncbi.nlm.nih.gov/pubmed/31441067) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Atsmon_2013.pdf` | Atsmon J et al., Investigation of the effects of ketocon…, Clinical pharmacokinetics (2013) | pgx | 7 | [10.1007/s40262-013-0063-8](https://doi.org/10.1007/s40262-013-0063-8) | [23568224](https://www.ncbi.nlm.nih.gov/pubmed/23568224) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Csonka_2026.pdf` | Csonka D et al., Effect of Once-Daily Macitentan 75 mg o…, Journal of clinical pharmac… (2026) | pgx | 7 | [10.1002/jcph.70185](https://doi.org/10.1002/jcph.70185) | [42023995](https://www.ncbi.nlm.nih.gov/pubmed/42023995) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dai_2024.pdf` | Dai GX et al., Differential inhibition of sildenafil a…, Toxicology and applied phar… (2024) | pgx | 7 | [10.1016/j.taap.2024.116934](https://doi.org/10.1016/j.taap.2024.116934) | [38663673](https://www.ncbi.nlm.nih.gov/pubmed/38663673) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Huppertz_2018.pdf` | Huppertz A et al., Rivaroxaban and macitentan can be coadm…, British journal of clinical… (2018) | pgx | 7 | [10.1111/bcp.13757](https://doi.org/10.1111/bcp.13757) | [30192025](https://www.ncbi.nlm.nih.gov/pubmed/30192025) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Treiber_2020.pdf` | Treiber A et al., The endothelin receptor antagonist maci…, Pharmacology research & per… (2020) | pgx | 7 | [10.1002/prp2.619](https://doi.org/10.1002/prp2.619) | [32613761](https://www.ncbi.nlm.nih.gov/pubmed/32613761) | metadata signals extractable PGX data (Cyp3a12, PK/PD-context) |
| `de_2016.pdf` | de Kanter R et al., Physiologically-Based Pharmacokinetic M…, Clinical pharmacokinetics (2016) | pgx | 7 | [10.1007/s40262-015-0322-y](https://doi.org/10.1007/s40262-015-0322-y) | [26385839](https://www.ncbi.nlm.nih.gov/pubmed/26385839) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-28T02:25:33.433808+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2014 | relevant | 8 | 2 | The study reports PK parameters for macitentan, but only non-compartmental metrics (tmax, t1/2, AUC, Cmax) are provided in the text, lacking specific clearance (CL) or volume (V) values required for population PK modeling. |
| PD | Ahn_2014 | not_relevant | 2 | 1 | The study reports qualitative dose-proportional PK and a positive correlation with ET-1, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Angus_2017 | irrelevant | 0 | 0 | no_text gate: only 15 chars of text extracted (&lt; 400) |
| PD | Angus_2017 | not_relevant | 0 | 0 | The provided text is a fragment ("Distortion of K") and contains no information regarding macitentan, pharmacodynamics, or exposure-response relationships. |
| PGx | Atsmon_2013 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Csonka_2026 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (macitentan with sildenafil, riociguat, or rosuvastatin) in healthy males and does not report any pharmacogenomic effects or genetic variants. |
| PGx | Dai_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (saxagliptin with macitentan/sildenafil) and does not report any pharmacogenomic effects (gene variants) on macitentan's PK or PD parameters. |
| PGx | Gatfield_2014 | not_relevant | 0 | 0 | The paper investigates the molecular binding mode of macitentan to the ET(A) receptor using site-directed mutagenesis of the receptor, not the effect of human genetic variants on macitentan's pharmacokinetics or pharmacodynamics. |
| PGx | Huppertz_2018 | not_relevant | 0 | 0 | The study assesses drug-drug interactions (rivaroxaban, St John's wort) in healthy volunteers and does not report any pharmacogenomic effects (gene variants) on macitentan PK/PD. |
| PGx | Kurimura_2025 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (bosentan vs. macitentan) affecting warfarin PK/PD, not a pharmacogenomic effect on macitentan. |
| popPK | Liu_2020 | irrelevant | 1 | 0 | Macitentan is used only as a comparator antihypertensive agent in a PK/PD study focused on sunitinib, and no quantitative PK parameters for macitentan are reported. |
| PGx | Mito_2022 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (PXR activation) affecting warfarin, not pharmacogenomic effects on macitentan's PK/PD. |
| PGx | Treiber_2020 | not_relevant | 0 | 0 | The paper discusses species differences and drug-induced enzyme induction, but does not report pharmacogenomic effects of specific gene variants on macitentan PK/PD. |
| PGx | Weiss_2013 | not_relevant | 0 | 0 | The paper describes in vitro drug-drug interaction potential (enzyme/transporter inhibition/induction) of macitentan, not the effect of a gene variant on macitentan's PK/PD. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects on macitentan PK/PD. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (imperatorin/curcumin) rather than pharmacogenomic effects (gene variants). |
| PGx | Xu_2023 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (bergapten inhibiting CYP3A4) affecting macitentan PK, not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | de_2016 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for drug-drug interactions (CYP3A4 inhibitors/inducers) and does not report pharmacogenomic effects of gene variants on macitentan PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 02:25 UTC</sub>
