<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;glasdegib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glasdegib_Lin2020v2_estimate&quot;,&quot;label&quot;:&quot;Lin_2020_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glasdegib_Lin2020v2_final_model&quot;,&quot;label&quot;:&quot;Lin_2020_2_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Lin2020v2_final_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glasdegib_Shaik2021_reference&quot;,&quot;label&quot;:&quot;Shaik_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Shaik2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# glasdegib

- **generic name:** glasdegib
- **ATC codes:** `L01XJ03`, `L01XX63`
- **DrugBank:** [DB11978](https://go.drugbank.com/drugs/DB11978) · **PubChem:** [CID 25166913](https://pubchem.ncbi.nlm.nih.gov/compound/25166913)
- **molar mass:** 374.448 g/mol (C21H22N6O) — DrugBank
- **groups:** approved, investigational

## About

Glasdegib is a hedgehog pathway inhibitor used to treat acute myeloid leukemia. It is an approved medicine, authorised in the European Union, and also remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077810](https://www.wikidata.org/wiki/Q27077810) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glasdegib | parent | 374.448 | C21H22N6O | DrugBank | [25166913](https://pubchem.ncbi.nlm.nih.gov/compound/25166913) | Lin_2020_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:44 | 0:37 | 3/0/0 | 1/0/0 | 0/0/0 | 77,875/2,664 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lin_2020_2_estimate](drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate.md) | ▶ model + simulator | 2-compartment, oral | 5 (+2 cov.) | Lin S et al., Population Pharmacokinetics of Glasdegi…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1556](https://doi.org/10.1002/jcph.1556) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lin_2020_2_final_model](drugs/drug_glasdegib/Glasdegib_Lin2020v2_final_model.md) | ▶ model + simulator | 2-compartment, oral | 5 | Lin S et al., Population Pharmacokinetics of Glasdegi…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1556](https://doi.org/10.1002/jcph.1556) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shaik_2021_reference](drugs/drug_glasdegib/Glasdegib_Shaik2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shaik N et al., Evaluation of the impact of renal impai…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04207-9](https://doi.org/10.1007/s00280-020-04207-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fostvedt_2021_QTcF](drugs/drug_glasdegib/pd_Fostvedt_2021_QTcF.md) | corrected QT interval ← glasdegib · direct linear effect | — | Fostvedt LK et al., Exposure-response modeling of the effec…, Expert review of clinical p… (2021) | [10.1080/17512433.2021.1925538](https://doi.org/10.1080/17512433.2021.1925538) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glasdegib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: MTOR (inhibitor), SMO (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fostvedt_2021 | irrelevant | 1 | 0 | This is an exposure-response (pharmacodynamic) study focusing on QTc changes and does not report quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life for glasdegib. |
| popPK | Lin_2020 | irrelevant | 2 | 0 | The paper presents a pharmacodynamic treatment-response and exposure-response survival analysis, but does not report original quantitative pharmacokinetic disposition parameters (clearance, volume, half-life) for glasdegib, only using exposure metrics (AUC) derived from a separate prior model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:43 UTC</sub>
