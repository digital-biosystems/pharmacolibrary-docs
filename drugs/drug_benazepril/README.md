<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;benazepril&quot;}]"></div>

# benazepril

- **generic name:** benazepril
- **ATC codes:** `C09AA07`, `C09BA07`, `C09BB13`
- **DrugBank:** [DB00542](https://go.drugbank.com/drugs/DB00542) · **PubChem:** [CID 5362124](https://pubchem.ncbi.nlm.nih.gov/compound/5362124)
- **molar mass:** 424.4895 g/mol (C24H28N2O5) — DrugBank
- **groups:** approved, investigational

## About

Benazepril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine, available alone and in combination products with diuretics or calcium channel blockers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q592802](https://www.wikidata.org/wiki/Q592802) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| benazepril | parent | 424.49 | C24H28N2O5 | DrugBank | [5362124](https://pubchem.ncbi.nlm.nih.gov/compound/5362124) | King_2003 |
| benazeprilat | metabolite | 396.45 | — | the paper | — | King_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:14 | 12:37 | 0/2/2 | 1/0/0 | 2/0/3 | 159,303/42,983 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 8/0 | 1/7 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.1). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>STALE — current validate: not captured</sub> | [King_2003_i_v_benazeprilat](drugs/drug_benazepril/Benazepril_King2003_i_v_benazeprilat.md) | — | — (no model) | 0 | King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003) | [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.111). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>STALE — current validate: not captured</sub> | [King_2003_oral_benazepril_hcl](drugs/drug_benazepril/Benazepril_King2003_oral_benazepril_hcl.md) | — | — (no model) | 0 | King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003) | [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [King_2003_repeated_administration_n_6](drugs/drug_benazepril/Benazepril_King2003_repeated_administration_n_6.md) | — | 1-compartment (no model) | 8 | King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003) | [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [King_2003_single_administration_n_5](drugs/drug_benazepril/Benazepril_King2003_single_administration_n_5.md) | — | 1-compartment (no model) | 8 | King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003) | [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span> | [King_2003_ACE_activity](drugs/drug_benazepril/pd_King_2003_ACE_activity.md) | plasma angiotensin-converting enzyme (ACE) activity ← benazeprilat · direct sigmoid Emax (Hill) effect | — | King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003) | [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **MTHFR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Jiang_2004](drugs/drug_benazepril/pgx_Jiang_2004_MTHFR_safety.md) | Jiang S et al., The C677T polymorphism of the methylene…, Thrombosis research (2004) | [10.1016/j.thromres.2004.04.005](https://doi.org/10.1016/j.thromres.2004.04.005) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span> | **MTHFR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Zhang_2004](drugs/drug_benazepril/pgx_Zhang_2004_MTHFR_safety.md) | Zhang Y et al., D919G polymorphism of methionine syntha…, Journal of human genetics (2004) | [10.1007/s10038-004-0149-0](https://doi.org/10.1007/s10038-004-0149-0) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **ACE2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Chen_2016](drugs/drug_benazepril/pgx_Chen_2016_ACE2_Q100.md) | Chen YY et al., Impact of ACE2 gene polymorphism on ant…, Journal of human hypertensi… (2016) | [10.1038/jhh.2016.24](https://doi.org/10.1038/jhh.2016.24) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **ACE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Ha_2000](drugs/drug_benazepril/pgx_Ha_2000_ACE_Q100.md) | Ha SK et al., ACE DD genotype is more susceptible tha…, Nephrology, dialysis, trans… (2000) | [10.1093/ndt/15.10.1617](https://doi.org/10.1093/ndt/15.10.1617) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ADRB2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Huang_2004](drugs/drug_benazepril/pgx_Huang_2004_ADRB2_Q100.md) | Huang G et al., Beta2 adrenergic receptor gene Arg16Gly…, Clinical and experimental h… (2004) | [10.1081/ceh-200031839](https://doi.org/10.1081/ceh-200031839) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=benazepril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor), ACE (target), ACE2 (target), ADRB2 (target), MTHFR (safety_allele), MTHFR (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 8  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reinisch_2023.pdf` | Reinisch V et al., Development of a Digital Interface for…, Studies in health technolog… (2023) | popPK | 8 | [10.3233/SHTI230027](https://doi.org/10.3233/SHTI230027) | [37172168](https://pubmed.ncbi.nlm.nih.gov/37172168) | The paper describes a PBPK and population PK model for benazepril/benazeprilat, but the specific numeric parameter values are not present in the provided evidence. |
| `King_1997.pdf` | King JN et al., Pharmacokinetics of the angiotensin-con…, Xenobiotica; the fate of fo… (1997) | pd | 5 | [10.1080/004982597240181](https://doi.org/10.1080/004982597240181) | [9293618](https://www.ncbi.nlm.nih.gov/pubmed/9293618) | metadata signals extractable PD data (Emax) |
| `King_1999.pdf` | King JN et al., Plasma angiotensin converting enzyme ac…, Journal of veterinary pharm… (1999) | pd | 5 | [10.1046/j.1365-2885.1999.00230.x](https://doi.org/10.1046/j.1365-2885.1999.00230.x) | [10651464](https://www.ncbi.nlm.nih.gov/pubmed/10651464) | metadata signals extractable PD data (Emax) |
| `Manson_2025.pdf` | Manson E et al., Dose-exposure-response of CARDALIS® (be…, Journal of veterinary inter… (2025) | pd | 5 | [10.1111/jvim.17255](https://doi.org/10.1111/jvim.17255) | [39601373](https://www.ncbi.nlm.nih.gov/pubmed/39601373) | metadata signals extractable PD data (exposure-response) |
| `Mochel_2015.pdf` | Mochel JP et al., Pharmacokinetic/Pharmacodynamic Modelin…, Pharmaceutical research (2015) | pd | 5 | [10.1007/s11095-014-1587-9](https://doi.org/10.1007/s11095-014-1587-9) | [25446774](https://www.ncbi.nlm.nih.gov/pubmed/25446774) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Serrano-Rodríguez_2017.pdf` | Serrano-Rodríguez JM et al., Pharmacokinetic/pharmacodynamic modelin…, Research in veterinary scie… (2017) | pd | 5 | [10.1016/j.rvsc.2017.03.016](https://doi.org/10.1016/j.rvsc.2017.03.016) | [28371693](https://www.ncbi.nlm.nih.gov/pubmed/28371693) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Toutain_2000.pdf` | Toutain PL et al., Benazeprilat disposition and effect in…, The Journal of pharmacology… (2000) | pd | 5 | not captured | [10688627](https://www.ncbi.nlm.nih.gov/pubmed/10688627) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-07T05:02:26.354482+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ding_2000 | not_relevant | 0 | 0 | The paper discusses ACE inhibitors in general (cilazapril, fosinopril, perindopril) and does not report pharmacokinetic or pharmacodynamic data for benazepril. |
| popPK | King_1997 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | King_1997 | not_relevant | 0 | 0 | The paper reports only pharmacokinetics of benazepril and benazeprilat in dogs, with no concentration-effect or dose-response relationship or PD parameters described. |
| popPK | King_1999 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| popPK | Manson_2025 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Mochel_2015 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| popPK | Reinisch_2023 | relevant | 8 | 0 | The paper describes a PBPK and population PK model for benazepril/benazeprilat, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Serrano-Rodríguez_2017 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| popPK | Toutain_2000 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PGx | Yu_2005 | not_relevant | 0 | 0 | The study reports no association between the gene polymorphisms and the blood pressure response to Benazepril treatment. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:02 UTC</sub>
