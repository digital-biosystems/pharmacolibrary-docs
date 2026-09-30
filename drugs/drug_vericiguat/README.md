<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;vericiguat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vericiguat_Fritsch2024_reference&quot;,&quot;label&quot;:&quot;Fritsch_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_vericiguat/Vericiguat_Fritsch2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vericiguat_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# vericiguat

- **generic name:** vericiguat
- **ATC codes:** `C01DX22`
- **DrugBank:** [DB15456](https://go.drugbank.com/drugs/DB15456) · **PubChem:** not captured
- **molar mass:** 426.388 g/mol (C19H16F2N8O2) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Vericiguat is a direct stimulator of soluble guanylate cyclase (sGC) used in the management of systolic heart failure to reduce mortality and hospitalizations.[L31153] A key component of the NO-sGC-cGMP signaling pathway that helps to regulate the cardiovascular system, sGC enzymes are intracellular enzymes found in vascular smooth muscle cells (amongst other cell types) that catalyze the synthesis of cyclic guanosine monophosphate (cGMP) in response to activation by nitric oxide (NO).[A227458,A227488] Cyclic GMP acts as a second messenger, activating a number of downstream signaling cascades that elicit a broad variety of effects, and these diverse cellular effects have implicated deficiencies in its production (primarily due to insufficient NO bioavailability) in the pathogenesis of various cardiovascular diseases.[A227458] As a direct stimulator of sGC, vericiguat mitigates the need for a functional NO-sGC-cGMP axis and thereby helps to prevent the myocardial and vascular dysfunction associated with decreased sGC activity in heart failure.[L31178]

Vericiguat was approved by the FDA in January 2021 - developed by Merck under the brand name Verquvo - for use in certain patients with systolic heart failure.[L31178] Although not the first sGC stimulator to be granted FDA approval ([riociguat] was approved in 2013 for use in pulmonary hypertension),[L3955] vericiguat is unique amongst its peers in that modifications to its structure have dramatically decreased its susceptibility to oxidative metabolism,[A227458] resulting in a relatively long half-life and allowing for once-daily dosing.

**Indication.** Vericiguat is indicated in adults with symptomatic, chronic heart failure and an ejection fraction of <45% to reduce the risk of cardiovascular death and heart failure-related hospitalization following a hospitalization for heart failure or need for outpatient intravenous diuretics.[L31153]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vericiguat | parent | 426.388 | C19H16F2N8O2 | DrugBank | — | Fritsch_2024, Ruehs_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 15:58 | 6:39 | 0/0/2 | 0/0/0 | 0/0/0 | 101,661/21,024 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Fritsch_2024_reference](drugs/drug_vericiguat/Vericiguat_Fritsch2024_reference.md) | — | 1-compartment (no model) | 1 | Fritsch A et al., Clinical Pharmacokinetic and Pharmacody…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01384-1](https://doi.org/10.1007/s40262-024-01384-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.583). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C2_reference failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Ruehs_2021_reference](drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md) | — | 1-compartment (no model) | 3 (+4 cov.) | Ruehs H et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01024-y](https://doi.org/10.1007/s40262-021-01024-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vericiguat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…red radioactivity was recovered in the urine and 45% in the feces.[L31153] A human mass ba…”</sub> | prose |
| excretion | kidney | <sub>“…53% of the administered radioactivity was recovered in the urine and 45% in the feces.[L31…”</sub> | prose |

<sub>Actors without a tissue in the table: GUCY1B1 (stimulator), GUCY2D (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Trujillo_2022.pdf` | Trujillo ME et al., Population Pharmacokinetics of Vericigu…, Clinical pharmacology and t… (2022) | popPK | 10 | [10.1002/cpt.2712](https://doi.org/10.1002/cpt.2712) | [35841202](https://pubmed.ncbi.nlm.nih.gov/35841202) | The paper describes a population PK model for vericiguat but the provided evidence contains only qualitative descriptions of the model structure and covariates, with no numeric parameter values (e.g., CL, V, ka) present in the text. |

<sub>queue written 2026-09-27T15:52:24.402032+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Trujillo_2022 | relevant | 10 | 0 | The paper describes a population PK model for vericiguat but the provided evidence contains only qualitative descriptions of the model structure and covariates, with no numeric parameter values (e.g., CL, V, ka) present in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 15:52 UTC</sub>
