<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;batroxobin&quot;}]"></div>

# batroxobin

- **generic name:** batroxobin
- **ATC codes:** `B02BX03`
- **DrugBank:** [DB09005](https://go.drugbank.com/drugs/DB09005) · **PubChem:** not captured
- **groups:** investigational

## About

Batroxobin, an enzyme derived from snake venom, acts as a hemostatic agent and has been studied for controlling bleeding. It is not an approved medicine in major markets such as the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q993771](https://www.wikidata.org/wiki/Q993771) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 17:29 | 0:23 | 0/0/0 | 0/0/0 | 0/0/0 | 7,741/274 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/2 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zheng_2013.pdf` | Zheng ZH et al., [Pharmacodynamics and pharmacokinetics…, Yao xue xue bao = Acta phar… (2013) | popPK | 9 | not captured | [24187841](https://pubmed.ncbi.nlm.nih.gov/24187841) | The study reports quantitative pharmacokinetic parameters (t1/2, Cmax, AUC) for batroxobin in Beagle dogs, with values explicitly listed in the text. |

<sub>queue written 2026-10-05T17:29:33.158518+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choi_2018 | irrelevant | 1 | 0 | The study reports pharmacodynamic endpoints (fibrinogen, TT) and safety, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for batroxobin. |
| popPK | Clare_2023 | irrelevant | 0 | 0 | The paper is an in-vitro high-throughput screening study for snake venom metalloproteinase inhibitors and does not report pharmacokinetic parameters for batroxobin. |
| popPK | Markwardt_1979 | irrelevant | 0 | 0 | The study uses batroxobin as an agent to induce secondary fibrinolysis in rats to test other drugs, rather than measuring batroxobin's own pharmacokinetic parameters. |
| popPK | Markwardt_1985 | irrelevant | 2 | 0 | The study focuses on the enzymatic deacylation half-life and qualitative defibrinogenation effects in rats, without reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for batroxobin. |
| popPK | Richter_1988 | irrelevant | 2 | 0 | The study focuses on enzymatic activity and defibrinogenation effects in rats rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for batroxobin. |
| popPK | Stocker_1982 | irrelevant | 0 | 0 | The paper is a mechanistic review of snake venom proteinases and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for batroxobin. |
| PD | Stocker_1982 | not_relevant | 1 | 0 | The text is a qualitative review of thrombin-like proteinases that mentions dose-response relationships exist but provides no numeric PD parameters, curves, or specific exposure-response data for batroxobin. |
| popPK | Sugai_1986 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no scientific content or pharmacokinetic data for batroxobin. |
| popPK | Surette_2011 | irrelevant | 0 | 0 | Batroxobin is used only as a tool to induce thrombi in a mechanistic study of S100A10, with no pharmacokinetic parameters reported. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The study uses batroxobin as a tool to induce fibrin deposition for a thrombolysis mechanism study, not to characterize its pharmacokinetic parameters. |
| PD | Wang_2003 | not_relevant | 1 | 0 | The study describes a qualitative interaction between LPS and batroxobin-induced fibrinolysis but does not provide numeric concentration-effect or dose-response parameters for batroxobin itself. |
| popPK | Xie_2022 | irrelevant | 0 | 0 | The paper is a comparative genomics and evolutionary study of snake venom toxins, not a pharmacokinetic study of batroxobin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
