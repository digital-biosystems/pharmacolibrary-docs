<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;eptinezumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eptinezumab_Baker2020_reference&quot;,&quot;label&quot;:&quot;Baker_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# eptinezumab

- **generic name:** eptinezumab
- **ATC codes:** `N02CD05`
- **DrugBank:** [DB14040](https://go.drugbank.com/drugs/DB14040)
- **groups:** approved, investigational

## About

**Description.** Eptinezumab is a fully-humanized IgG1 antibody manufactured using yeast (_Pichia pastoris_) and developed by Lundbeck Seattle Biopharmaceuticals.[L12318] Eptinezumab has been specifically designed to bind to both alpha and beta forms of the human calcitonin gene-related peptide (CGRP).[F94,A33105,A33106,A33108] It was approved by the FDA in February 2020 for the preventive treatment of migraine headaches in adults.[L12318]

**Indication.** Eptinezumab is indicated for the preventive treatment of migraine in adults.[L12318]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 04:46 | 1:58 | 1/0/0 | 0/0/0 | 0/0/0 | 41,938/3,721 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `scholar`</sub> | [Baker_2020_reference](drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md) | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eptinezumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…nezumab are generally not eliminated via hepatic, renal, or biliary routes.[F94]…”</sub> | prose |
| excretion | kidney | <sub>“…like eptinezumab are generally not eliminated via hepatic, renal, or biliary routes.[F94]…”</sub> | prose |
| excretion | liver | <sub>“…dy agents like eptinezumab are generally not eliminated via hepatic, renal, or biliary rou…”</sub> | prose |

<sub>Actors without a tissue in the table: CALCA (antibody), CALCA (binder), CALCB (antibody), CALCB (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Areberg_2024.pdf` | Areberg J et al., Population pharmacokinetics of eptinezu…, Basic & clinical pharmacolo… (2024) | popPK | 10 | [10.1111/bcpt.14076](https://doi.org/10.1111/bcpt.14076) | [39206528](https://pubmed.ncbi.nlm.nih.gov/39206528) | The paper describes a population PK model for eptinezumab but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-09-21T04:44:46.046745+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Areberg_2024 | relevant | 10 | 0 | The paper describes a population PK model for eptinezumab but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on the PK/PD of eptinezumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 04:44 UTC</sub>
