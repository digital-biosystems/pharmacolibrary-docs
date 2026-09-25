<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;cyclophosphamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cyclophosphamide_Cohen1971_cancer_patients&quot;,&quot;label&quot;:&quot;Cohen_1971_cancer patients&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Cohen1971_cancer_patients.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Iliopoulou2021_patients_with_autoimmune_glo&quot;,&quot;label&quot;:&quot;Iliopoulou_2021_patients with autoimmune glomerulonephritis&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Iliopoulou2021_patients_with_autoimmune_glo.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Veal2016_children_with_b_cell_non_hodgkin_s&quot;,&quot;label&quot;:&quot;Veal_2016_children with B-cell non-Hodgkin&#x27;s lymphoma&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Veal2016_children_with_b_cell_non_hodgkin_s.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# cyclophosphamide

- **generic name:** cyclophosphamide
- **ATC codes:** `L01AA01`
- **DrugBank:** [DB00531](https://go.drugbank.com/drugs/DB00531)
- **groups:** approved, investigational

## About

**Description.** Precursor of an alkylating nitrogen mustard antineoplastic and immunosuppressive agent that must be activated in the liver to form the active aldophosphamide. It has been used in the treatment of lymphoma and leukemia. Its side effect, alopecia, has been used for defleecing sheep. Cyclophosphamide may also cause sterility, birth defects, mutations, and cancer.

**Indication.** Cyclophosphamide for intravenous injection is indicated for the treatment of a number of malignancies, including: Hodgkin’s disease, lymphocytic lymphoma, mixed-cell type lymphoma, histiocytic lymphoma, Burkitt’s lymphoma; multiple myeloma, leukemias, mycosis fungoides, neuroblastoma, adenocarcinoma of ovary, retinoblastoma, and breast carcinoma.[L50141]

Cyclophosphamide oral capsules are additionally indicated for the treatment of minimal change nephrotic syndrome in pediatric patients who fail to adequately respond to (or are unable to tolerate) adrenocorticosteroid therapy.[L50557]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 04:02 | 1:03 | 0/0/0 | 0/0/0 | 0/0/0 | 24,274/1,562 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Cohen_1971_cancer patients](drugs/drug_cyclophosphamide/Cyclophosphamide_Cohen1971_cancer_patients.md) | Cohen JL et al., Pharmacokinetics of cyclophosphamide in…, British journal of pharmaco… (1971) | [10.1111/j.1476-5381.1971.tb07199.x](https://doi.org/10.1111/j.1476-5381.1971.tb07199.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Iliopoulou_2021_patients with autoimmune glomerulonephritis](drugs/drug_cyclophosphamide/Cyclophosphamide_Iliopoulou2021_patients_with_autoimmune_glo.md) | Iliopoulou VN et al., Population pharmacokinetics of cyclopho…, The Journal of pharmacy and… (2021) | [10.1093/jpp/rgab135](https://doi.org/10.1093/jpp/rgab135) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Veal_2016_children with B-cell non-Hodgkin's lymphoma](drugs/drug_cyclophosphamide/Cyclophosphamide_Veal2016_children_with_b_cell_non_hodgkin_s.md) | Veal GJ et al., Cyclophosphamide pharmacokinetics and p…, European journal of cancer… (2016) | [10.1016/j.ejca.2015.12.007](https://doi.org/10.1016/j.ejca.2015.12.007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cyclophosphamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` inducer/substrate, `CYP2C19` substrate, `CYP2C8` inducer/substrate, `CYP2C9` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…s excreted unchanged in the urine and 4% is excreted in the bile following IV administrati…”</sub> | prose |
| excretion | kidney | <sub>“…he form of metabolites. 10-20% is excreted unchanged in the urine and 4% is excreted in th…”</sub> | prose |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), DNA (cross-linking/alkylation), NR1I2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 165 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Iliopoulou_2021.pdf` | Iliopoulou VN et al., Population pharmacokinetics of cyclopho…, The Journal of pharmacy and… (2021) | popPK | 10 | [10.1093/jpp/rgab135](https://doi.org/10.1093/jpp/rgab135) | [34480477](https://pubmed.ncbi.nlm.nih.gov/34480477) | The paper reports a population PK model for cyclophosphamide with specific numeric values for clearance (13.3 l/h) and volume of distribution (59.8 l) directly in the text. |
| `Veal_2016.pdf` | Veal GJ et al., Cyclophosphamide pharmacokinetics and p…, European journal of cancer… (2016) | popPK | 10 | [10.1016/j.ejca.2015.12.007](https://doi.org/10.1016/j.ejca.2015.12.007) | [26773420](https://pubmed.ncbi.nlm.nih.gov/26773420) | The paper reports a population PK model for cyclophosphamide with specific numeric clearance values (CL) provided in the text, though other parameters like volume are not explicitly listed. |
| `Cohen_1971.pdf` | Cohen JL et al., Pharmacokinetics of cyclophosphamide in…, British journal of pharmaco… (1971) | popPK | 9 | [10.1111/j.1476-5381.1971.tb07199.x](https://doi.org/10.1111/j.1476-5381.1971.tb07199.x) | [5157730](https://pubmed.ncbi.nlm.nih.gov/5157730) | The paper reports quantitative PK parameters (half-life, renal clearance, metabolic fraction) for cyclophosphamide in humans, but lacks specific values for clearance (CL), volume (V), or intercompartmental clearance (Q) required for a full compartmental model. |

<sub>queue written 2026-09-15T04:02:14.959410+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Deng_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polatuzumab vedotin, with cyclophosphamide serving only as a co-administered comparator agent in the R-CHP regimen. |
| PD | Deng_2024 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for polatuzumab vedotin, not cyclophosphamide, and does not report numeric PD parameters for cyclophosphamide. |
| popPK | Gawarammana_2011 | irrelevant | 0 | 0 | The paper is a review of paraquat poisoning where cyclophosphamide is only mentioned as a co-administered immunosuppressant, with no PK parameters reported for it. |
| popPK | Luo_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of daratumumab, with cyclophosphamide serving only as a co-administered comparator agent in the treatment regimen. |
| PD | Luo_2022 | not_relevant | 0 | 0 | The paper reports population PK and exposure-response modeling for daratumumab, not cyclophosphamide. |
| popPK | Maher_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing rituximab and cyclophosphamide for interstitial lung disease and does not report any pharmacokinetic parameters. |
| popPK | Tashkin_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing mycophenolate mofetil and cyclophosphamide for scleroderma-related interstitial lung disease and does not report any pharmacokinetic parameters. |
| popPK | Yang_2015 | irrelevant | 2 | 0 | The paper is a review of PK modeling for SLE therapies and does not report original quantitative PK parameter values for cyclophosphamide in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 04:02 UTC</sub>
