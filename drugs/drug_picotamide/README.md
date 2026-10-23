<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;picotamide&quot;}]"></div>

# picotamide

- **generic name:** picotamide
- **ATC codes:** `B01AC03`
- **DrugBank:** [DB13327](https://go.drugbank.com/drugs/DB13327) · **PubChem:** not captured
- **molar mass:** 376.416 g/mol (C21H20N4O3) — DrugBank
- **groups:** experimental

## About

Picotamide is a platelet aggregation inhibitor, an antithrombotic drug used to prevent blood clots. It is not an approved medicine in the European Union and appears only as an experimental agent, so its current clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1235921](https://www.wikidata.org/wiki/Q1235921) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Collins_1996_TXB2](drugs/drug_picotamide/pd_Collins_1996_TXB2.md) | thromboxane B2 release ← picotamide · direct Emax (saturable) effect | — | Collins CE et al., Picotamide inhibition of excess in vitr…, Alimentary pharmacology & t… (1996) | [10.1111/j.0953-0673.1996.00315.x](https://doi.org/10.1111/j.0953-0673.1996.00315.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:13 | 1:02 | 0/0/0 | 0/1/0 | 0/0/0 | 41,419/722 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anfossi_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet aggregation and does not report any pharmacokinetic parameters. |
| popPK | Buccellati_2006 | irrelevant | 0 | 0 | The study characterizes the pharmacological and pharmacokinetic properties of 2NTX-99, a new chemical entity related to picotamide, but does not report PK parameters for picotamide itself. |
| popPK | Collins_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thromboxane inhibition and does not report pharmacokinetic parameters for picotamide. |
| popPK | Gresele_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and does not report any pharmacokinetic parameters. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction in porcine arteries and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for picotamide. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in vitro anti-platelet activity of picotamide analogs, containing no pharmacokinetic data. |
| popPK | Liu_2015_2 | irrelevant | 0 | 0 | The paper is an in-vitro synthesis and antiplatelet activity study, not a pharmacokinetic study, and reports no disposition parameters for picotamide. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is an in-vitro synthesis and biological evaluation of novel compounds where picotamide is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Liu_2021 | not_relevant | 1 | 0 | The paper reports IC50 values for novel compounds and compares them to picotamide, but does not provide numeric PD parameters (IC50, Emax, etc.) for picotamide itself, nor does it model a concentration-effect relationship for picotamide. |
| popPK | Vezza_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (vasoconstriction and platelet aggregation) and does not report any pharmacokinetic parameters. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro anti-platelet activity of novel benzamides, not the pharmacokinetics of picotamide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
