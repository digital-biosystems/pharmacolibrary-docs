<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;tanezumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tanezumab_Jonsson2016_reference&quot;,&quot;label&quot;:&quot;Jonsson_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tanezumab/Tanezumab_Jonsson2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tanezumab_Shoji2022_reference&quot;,&quot;label&quot;:&quot;Shoji_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tanezumab/Tanezumab_Shoji2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tanezumab

- **generic name:** tanezumab
- **ATC codes:** `N02BG12`
- **DrugBank:** [DB12335](https://go.drugbank.com/drugs/DB12335)
- **groups:** investigational

## About

**Description.** Tanezumab has been investigated for the treatment of Osteoarthritis, Knee and Neuralgia, Postherpetic.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 03:26 | 2:11 | 0/2/0 | 0/0/0 | 0/0/0 | 58,555/2,760 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jonsson_2016_reference](drugs/drug_tanezumab/Tanezumab_Jonsson2016_reference.md) | Jonsson EN et al., Population pharmacokinetics of tanezuma…, British journal of clinical… (2016) | [10.1111/bcp.12850](https://doi.org/10.1111/bcp.12850) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Shoji_2022_reference](drugs/drug_tanezumab/Tanezumab_Shoji2022_reference.md) | Shoji S et al., Population pharmacokinetics of tanezuma…, British journal of clinical… (2022) | [10.1111/bcp.15259](https://doi.org/10.1111/bcp.15259) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shoji_2022.pdf` | Shoji S et al., Population pharmacokinetics of tanezuma…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15259](https://doi.org/10.1111/bcp.15259) | [35112378](https://pubmed.ncbi.nlm.nih.gov/35112378) | The paper reports a population PK model for tanezumab with explicit numeric values for clearance, volumes, and bioavailability in the text. |

<sub>queue written 2026-09-21T03:24:43.604568+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Lian_2022 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical trials reporting aggregate efficacy outcomes (mean differences in pain scores) and safety, but it does not report any pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Shoji_2023 | relevant | 5 | 1 | The study uses a population PK model for tanezumab but fixes the PK parameters to values from a previous study (reference 13/Table S1), which are not provided in the evidence, reporting only NGF-related parameters. |
| PD | Tahir_2023 | not_relevant | 2 | 1 | The paper is a meta-analysis of clinical trial outcomes (dose-response in terms of fixed doses vs placebo) but does not report pharmacokinetic data, concentration-effect relationships, or formal PD model parameters (Emax, EC50, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 03:24 UTC</sub>
