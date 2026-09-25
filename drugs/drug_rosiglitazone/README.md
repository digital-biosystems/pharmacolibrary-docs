<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;rosiglitazone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rosiglitazone_Gao2012_estimate_cv&quot;,&quot;label&quot;:&quot;Gao_2012_estimate_cv&quot;,&quot;href&quot;:&quot;drugs/drug_rosiglitazone/Rosiglitazone_Gao2012_estimate_cv.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosiglitazone_Kirchheiner2006_reference&quot;,&quot;label&quot;:&quot;Kirchheiner_2006_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rosiglitazone/Rosiglitazone_Kirchheiner2006_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosiglitazone_Gao2012_definition&quot;,&quot;label&quot;:&quot;Gao_2012_definition&quot;,&quot;href&quot;:&quot;drugs/drug_rosiglitazone/Rosiglitazone_Gao2012_definition.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# rosiglitazone

- **generic name:** rosiglitazone
- **ATC codes:** `A10BD03`, `A10BD04`, `A10BG02`
- **DrugBank:** [DB00412](https://go.drugbank.com/drugs/DB00412)
- **groups:** approved, investigational

## About

**Description.** Rosiglitazone is an anti-diabetic drug in the thiazolidinedione class of drugs. It is marketed by the pharmaceutical company GlaxoSmithKline as a stand-alone drug (Avandia) and in combination with metformin (Avandamet) or with glimepiride (Avandaryl). Like other thiazolidinediones, the mechanism of action of rosiglitazone is by activation of the intracellular receptor class of the peroxisome proliferator-activated receptors (PPARs), specifically PPARγ. Rosiglitazone is a selective ligand of PPARγ, and has no PPARα-binding action. Apart from its effect on insulin resistance, it appears to have an anti-inflammatory effect: nuclear factor kappa-B (NFκB) levels fall and inhibitor (IκB) levels increase in patients on rosiglitazone. Recent research has suggested that rosiglitazone may also be of benefit to a subset of patients with Alzheimer's disease not expressing the ApoE4 allele. This is the subject of a clinical trial currently underway.

**Indication.** Rosiglitazone is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 19:15 | 0:50 | 1/1/1 | 0/0/0 | 0/0/0 | 22,406/1,570 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Gao_2012_estimate_cv](drugs/drug_rosiglitazone/Rosiglitazone_Gao2012_estimate_cv.md) | Gao W et al., Modeling disease progression and rosigl…, The Journal of pharmacology… (2012) | [10.1124/jpet.112.192419](https://doi.org/10.1124/jpet.112.192419) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Kirchheiner_2006_reference](drugs/drug_rosiglitazone/Rosiglitazone_Kirchheiner2006_reference.md) | Kirchheiner J et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (2006) | [10.1016/j.clpt.2006.09.008](https://doi.org/10.1016/j.clpt.2006.09.008) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: split column 'definition' is a table statistic/structure column, not a study po…</sub><br><sub>route_to: `human_review`</sub> | [Gao_2012_definition](drugs/drug_rosiglitazone/Rosiglitazone_Gao2012_definition.md) | Gao W et al., Modeling disease progression and rosigl…, The Journal of pharmacology… (2012) | [10.1124/jpet.112.192419](https://doi.org/10.1124/jpet.112.192419) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rosiglitazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor, `CYP2E1` substrate, `CYP3A4` inducer/substrate, `SLC10A1` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…and 23% of the dose was eliminated in the urine and in the feces, respectively.…”</sub> | prose |
| excretion | kidney | <sub>“…approximately 64% and 23% of the dose was eliminated in the urine and in the feces, respec…”</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACSL4 (inhibitor), PPARG (target), PTGS1 (substrate), RXRA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kirchheiner_2006.pdf` | Kirchheiner J et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (2006) | popPK | 10 | [10.1016/j.clpt.2006.09.008](https://doi.org/10.1016/j.clpt.2006.09.008) | [17178266](https://pubmed.ncbi.nlm.nih.gov/17178266) | The study reports quantitative pharmacokinetic parameters (clearance, half-life) for rosiglitazone in humans, with specific numeric values provided in the text. |
| `Kulkarni_2016.pdf` | Kulkarni NM et al., Altered pharmacokinetics of rosiglitazo…, Drug metabolism and persona… (2016) | popPK | 8 | [10.1515/dmpt-2016-0008](https://doi.org/10.1515/dmpt-2016-0008) | [27522101](https://pubmed.ncbi.nlm.nih.gov/27522101) | The study reports quantitative PK parameters (AUC, clearance, half-life) for rosiglitazone in mice, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-09-18T19:15:19.093997+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kulkarni_2016 | relevant | 8 | 2 | The study reports quantitative PK parameters (AUC, clearance, half-life) for rosiglitazone in mice, but the specific numeric values are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 19:15 UTC</sub>
