<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;pirenzepine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pirenzepine_Vergin1986_reference&quot;,&quot;label&quot;:&quot;Vergin_1986_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pirenzepine/Pirenzepine_Vergin1986_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pirenzepine_Vergin1989_reference&quot;,&quot;label&quot;:&quot;Vergin_1989_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pirenzepine/Pirenzepine_Vergin1989_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# pirenzepine

- **generic name:** pirenzepine
- **ATC codes:** `A02BX03`
- **DrugBank:** [DB00670](https://go.drugbank.com/drugs/DB00670)
- **groups:** approved, withdrawn

## About

**Description.** An antimuscarinic agent that inhibits gastric secretion at lower doses than are required to affect gastrointestinal motility, salivary, central nervous system, cardiovascular, ocular, and urinary function. It promotes the healing of duodenal ulcers and due to its cytoprotective action is beneficial in the prevention of duodenal ulcer recurrence. It also potentiates the effect of other antiulcer agents such as cimetidine and ranitidine. It is generally well tolerated by patients.

**Indication.** For the treatment of peptic ulcer, gastric ulcer, and duodenal ulcer.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 06:23 | 2:26 | 0/1/1 | 0/0/0 | 0/0/0 | 21,437/9,297 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Vergin_1986_reference](drugs/drug_pirenzepine/Pirenzepine_Vergin1986_reference.md) | Vergin H et al., Pharmacokinetics and bioequivalence of…, Arzneimittel-Forschung (1986) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Vergin_1989_reference](drugs/drug_pirenzepine/Pirenzepine_Vergin1989_reference.md) | Vergin H et al., Effect of an aluminium-hydroxide contai…, Arzneimittel-Forschung (1989) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pirenzepine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 204 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vergin_1986.pdf` | Vergin H et al., Pharmacokinetics and bioequivalence of…, Arzneimittel-Forschung (1986) | popPK | 10 | not captured | [3790194](https://pubmed.ncbi.nlm.nih.gov/3790194) | The study reports quantitative PK parameters (t1/2, V1, Cl) for pirenzepine in humans, and the numeric values are explicitly present in the text. |
| `Vergin_1989.pdf` | Vergin H et al., Effect of an aluminium-hydroxide contai…, Arzneimittel-Forschung (1989) | popPK | 9 | not captured | [2751741](https://pubmed.ncbi.nlm.nih.gov/2751741) | The study reports quantitative PK parameters (half-life, AUC, Cmax) for pirenzepine, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |

<sub>queue written 2026-09-18T06:20:56.051615+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Deppermann_1989 | irrelevant | 1 | 0 | Pirenzepine is a co-administered drug used to test interactions with antibiotics, and no pharmacokinetic parameters (CL, V, etc.) for pirenzepine itself are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 06:21 UTC</sub>
