<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;bumetanide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bumetanide_Pentikinen1985_reference&quot;,&quot;label&quot;:&quot;Pentik\u00e4inen_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bumetanide/Bumetanide_Pentikinen1985_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bumetanide_Jullien2016_reference&quot;,&quot;label&quot;:&quot;Jullien_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bumetanide/Bumetanide_Jullien2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# bumetanide

- **generic name:** bumetanide
- **ATC codes:** `C03CA02`, `C03CB02`, `C03EB02`
- **DrugBank:** [DB00887](https://go.drugbank.com/drugs/DB00887) · **PubChem:** [CID 2471](https://pubchem.ncbi.nlm.nih.gov/compound/2471)
- **molar mass:** 364.416 g/mol (C17H20N2O5S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Bumetanide  is a sulfamyl diuretic.

**Indication.** For the treatment of edema associated with congestive heart failure, hepatic and renal disease including the nephrotic syndrome.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bumetanide | parent | 364.416 | C17H20N2O5S | DrugBank | [2471](https://pubchem.ncbi.nlm.nih.gov/compound/2471) | Jullien_2016, Pentikäinen_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 08:26 | 16:10 | 0/1/1 | 0/0/0 | 0/0/4 | 62,888/13,986 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/2 | 3/1 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Pentikäinen_1985_reference](drugs/drug_bumetanide/Bumetanide_Pentikinen1985_reference.md) | 1-compartment (no model) | 4 | Pentikäinen PJ et al., Bumetanide kinetics in renal failure, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.91](https://doi.org/10.1038/clpt.1985.91) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Jullien_2016_reference](drugs/drug_bumetanide/Bumetanide_Jullien2016_reference.md) | 2-compartment (no model) | 4 | Jullien V et al., Pilot evaluation of the population phar…, Journal of clinical pharmac… (2016) | [10.1002/jcph.596](https://doi.org/10.1002/jcph.596) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ACE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Vormfelde_2012](drugs/drug_bumetanide/pgx_Vormfelde_2012_ACE_Q100.md) | Vormfelde SV et al., The genetics of loop diuretic effects, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.68](https://doi.org/10.1038/tpj.2010.68) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ADD1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Vormfelde_2012](drugs/drug_bumetanide/pgx_Vormfelde_2012_ADD1_Q100.md) | Vormfelde SV et al., The genetics of loop diuretic effects, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.68](https://doi.org/10.1038/tpj.2010.68) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ANP** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Vormfelde_2012](drugs/drug_bumetanide/pgx_Vormfelde_2012_ANP_Q100.md) | Vormfelde SV et al., The genetics of loop diuretic effects, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.68](https://doi.org/10.1038/tpj.2010.68) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **GNB3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Vormfelde_2012](drugs/drug_bumetanide/pgx_Vormfelde_2012_GNB3_Q100.md) | Vormfelde SV et al., The genetics of loop diuretic effects, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.68](https://doi.org/10.1038/tpj.2010.68) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bumetanide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` substrate | DrugBank actor |
| absorption | small intestine | `SLCO1A2` substrate | DrugBank actor |
| metabolism | bile duct | <sub>“…45% is secreted unchanged. Urinary and biliary metabolites are formed by oxidation of the…”</sub> | prose |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `SLC10A1` inhibitor/substrate, `SLC22A7` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…ity was excreted in the urine, 45% of it as unchanged drug. Biliary excretion of Bumex amo…”</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (target), ADD1 (target), ANP (target), CFTR (target), GNB3 (target), PTGS2 (inducer), SLC12A1 (inhibitor), SLC12A2 (inhibitor), SLC12A4 (inhibitor), SLC12A5 (inhibitor), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 80 matched, 29 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jullien_2016.pdf` | Jullien V et al., Pilot evaluation of the population phar…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.596](https://doi.org/10.1002/jcph.596) | [26189501](https://pubmed.ncbi.nlm.nih.gov/26189501) | The abstract explicitly reports quantitative population PK parameters (CL, Vc, Vp, Q) for bumetanide in a 2-compartment model. |
| `Pentikäinen_1985.pdf` | Pentikäinen PJ et al., Bumetanide kinetics in renal failure, Clinical pharmacology and t… (1985) | popPK | 10 | [10.1038/clpt.1985.91](https://doi.org/10.1038/clpt.1985.91) | [3987182](https://pubmed.ncbi.nlm.nih.gov/3987182) | The paper reports quantitative pharmacokinetic parameters (Vss, t1/2, CL) for bumetanide in humans, with specific numeric values provided in the text. |
| `Marcantonio_1983.pdf` | Marcantonio LA et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (1983) | popPK | 9 | [10.1111/j.1365-2125.1983.tb01493.x](https://doi.org/10.1111/j.1365-2125.1983.tb01493.x) | [6849758](https://pubmed.ncbi.nlm.nih.gov/6849758) | The paper reports a compartmental PK study for bumetanide, but the specific numeric values for clearance, volume, and half-life are not present in the provided abstract text, only qualitative comparisons and bioavailability values. |
| `Popović_2013.pdf` | Popović JK et al., Individualization of a pharmacokinetic…, European journal of drug me… (2013) | popPK | 8 | [10.1007/s13318-012-0097-6](https://doi.org/10.1007/s13318-012-0097-6) | [22618469](https://pubmed.ncbi.nlm.nih.gov/22618469) | The paper describes a pharmacokinetic modeling study for bumetanide in humans, but the specific numeric parameter values are not present in the provided evidence. |
| `Vormfelde_2007.pdf` | Vormfelde SV et al., Genetic variation in the renal sodium t…, Clinical pharmacology and t… (2007) | pgx | 5 | [10.1038/sj.clpt.6100131](https://doi.org/10.1038/sj.clpt.6100131) | [17460608](https://www.ncbi.nlm.nih.gov/pubmed/17460608) | metadata signals extractable PGX data (SLC12A1) |

<sub>queue written 2026-09-28T08:17:16.602076+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bettinelli_1998 | not_relevant | 0 | 0 | The paper discusses genetic causes of renal tubulopathies (Bartter/Gitelman) and mentions bumetanide only as a reference for the target protein (NKCC2) or as a diagnostic tool, without reporting pharmacogenomic effects on bumetanide's PK or PD parameters. |
| PGx | Bourrit_1985 | not_relevant | 0 | 0 | The paper studies the effect of bumetanide on potassium transport in cell lines with cAMP pathway defects, which is a cellular physiology study, not a pharmacogenomic study of human PK/PD parameters. |
| PGx | Boyarko_2023 | not_relevant | 0 | 0 | The paper discusses bumetanide as a therapeutic for Alzheimer's disease and mentions APOE4 as a risk factor, but it does not report a pharmacogenomic effect (i.e., how a specific gene variant alters the PK or PD of bumetanide). |
| PGx | Burckhardt_2016 | not_relevant | 0 | 0 | The paper investigates the transport of dantrolene and its metabolite, not the pharmacogenomics of bumetanide. |
| PGx | Carnovale_2023 | not_relevant | 0 | 0 | The paper is a review of neuropsychiatric effects of antihypertensives and does not report specific pharmacogenomic effects on PK/PD parameters for bumetanide. |
| PGx | Casillas-Espinosa_2025 | not_relevant | 0 | 0 | The paper is a workshop summary on targeted therapies for early onset epilepsies and does not report pharmacogenomic effects on the PK or PD of bumetanide. |
| PGx | Fernandes_1994 | not_relevant | 0 | 0 | The paper uses bumetanide as a tool to measure Na-K-Cl cotransporter activity in erythrocytes, but does not report a pharmacogenomic effect on the PK or PD of bumetanide itself. |
| popPK | Gu_2025 | irrelevant | 2 | 0 | The study is a PBPK modeling paper where bumetanide is one of eight drugs, and no specific quantitative PK parameter values (CL, V, etc.) for bumetanide are provided in the evidence. |
| PGx | Lal_2024 | not_relevant | 0 | 0 | The text is a general introduction that mentions the need to explore genetic polymorphisms but does not report any specific pharmacogenomic effects on PK or PD parameters for bumetanide. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic risk factors for methotrexate toxicity, not the pharmacokinetics or pharmacodynamics of bumetanide. |
| popPK | Marcantonio_1983 | relevant | 9 | 2 | The paper reports a compartmental PK study for bumetanide, but the specific numeric values for clearance, volume, and half-life are not present in the provided abstract text, only qualitative comparisons and bioavailability values. |
| popPK | Popović_2013 | relevant | 8 | 0 | The paper describes a pharmacokinetic modeling study for bumetanide in humans, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Vokurková_2003 | not_relevant | 0 | 0 | The paper uses bumetanide as a pharmacological inhibitor to measure ion transport mechanisms in erythrocytes, not to study the pharmacokinetics or pharmacodynamics of bumetanide itself in relation to genetic variants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 08:17 UTC</sub>
