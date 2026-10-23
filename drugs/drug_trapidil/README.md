<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;trapidil&quot;}]"></div>

# trapidil

- **generic name:** trapidil
- **ATC codes:** `C01DX11`
- **DrugBank:** [DB09283](https://go.drugbank.com/drugs/DB09283) · **PubChem:** [CID 5531](https://pubchem.ncbi.nlm.nih.gov/compound/5531)
- **molar mass:** 205.265 g/mol (C10H15N5) — DrugBank
- **groups:** experimental

## About

Trapidil is a vasodilator and platelet aggregation inhibitor that was classified for cardiac therapy as a vasodilator used in heart disease. It is currently considered experimental and does not appear to be an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2449982](https://www.wikidata.org/wiki/Q2449982) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:31 | 0:55 | 0/0/0 | 0/0/0 | 0/0/0 | 38,835/771 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 1/2 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berndt_1992.pdf` | Berndt A et al., Pharmacokinetics of trapidil (Rocornal)…, International journal of cl… (1992) | popPK | 10 | not captured | [1490801](https://pubmed.ncbi.nlm.nih.gov/1490801) | The study reports specific quantitative pharmacokinetic parameters (clearance and volume of distribution) for trapidil in human patients with liver disease. |
| `Berndt_1996.pdf` | Berndt A et al., Pharmacokinetics of trapidil in patient…, Journal of clinical pharmac… (1996) | popPK | 10 | [10.1002/j.1552-4604.1996.tb04756.x](https://doi.org/10.1002/j.1552-4604.1996.tb04756.x) | [8930776](https://pubmed.ncbi.nlm.nih.gov/8930776) | The study reports quantitative pharmacokinetic parameters (specifically total plasma clearance) for trapidil in humans, with numeric values provided in the text. |
| `Harder_1996.pdf` | Harder S et al., Pharmacokinetics of trapidil, an antago…, British journal of clinical… (1996) | popPK | 8 | [10.1046/j.1365-2125.1996.04338.x](https://doi.org/10.1046/j.1365-2125.1996.04338.x) | [8904615](https://pubmed.ncbi.nlm.nih.gov/8904615) | The study reports quantitative pharmacokinetic parameters (AUC, half-life) for trapidil in humans, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Thürmann_1997.pdf` | Thürmann PA et al., Pharmacokinetics of the PDGF-antagonist…, Clinical nephrology (1997) | popPK | 8 | not captured | [9049457](https://pubmed.ncbi.nlm.nih.gov/9049457) | The study reports quantitative PK parameters (Cmax, AUC) for trapidil and its metabolite in humans, though specific clearance or volume values are not explicitly listed in the text. |
| `Bethke_1991.pdf` | Bethke T et al., Effects of the triazolopyrimidine trapi…, Arzneimittel-Forschung (1991) | pd | 4 | not captured | [1716891](https://www.ncbi.nlm.nih.gov/pubmed/1716891) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T10:31:11.306214+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2018 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of Short QT Syndrome where trapidil is used as a tool compound to induce a model, not as the subject of pharmacokinetic analysis. |
| popPK | Bartel_1985 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme inhibition data (IC50) for trapidil derivatives, not pharmacokinetic disposition parameters. |
| popPK | Bethke_1991 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| popPK | Block_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function and does not report any pharmacokinetic parameters for trapidil. |
| popPK | Jargin_2012 | irrelevant | 0 | 0 | The paper is a critical review of in-vitro cell culture studies regarding atherosclerosis and does not report any pharmacokinetic parameters for trapidil. |
| popPK | Kohno_1983 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding trapidil pharmacokinetics. |
| popPK | Maruyama_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of trapidil's effects on tracheal blood flow and pressure in dogs, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Peterson_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on fibroproliferation where trapidil is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | Sziegoleit_2007 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of hand vein compliance and norepinephrine ED50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ujiie_1983 | irrelevant | 0 | 0 | The study focuses on the in-vitro platelet aggregation inhibitory effects of etafenone, with trapidil serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Yoshikawa_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic and electrophysiological investigation of isolated rabbit atria, reporting no pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
