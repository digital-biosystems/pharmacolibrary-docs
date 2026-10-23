<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;amezinium metilsulfate&quot;}]"></div>

# amezinium metilsulfate

- **generic name:** amezinium metilsulfate
- **ATC codes:** `C01CA25`
- **DrugBank:** [DB13330](https://go.drugbank.com/drugs/DB13330) · **PubChem:** not captured
- **molar mass:** 313.33 g/mol (C12H15N3O5S) — DrugBank
- **groups:** experimental

## About

Amezinium metilsulfate is a cardiac stimulant belonging to the adrenergic and dopaminergic agents, a class of drugs used to support cardiovascular function. It is not authorised in the European Union and is currently regarded as an experimental compound, so its present clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q470449](https://www.wikidata.org/wiki/Q470449) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 04:02 | 1:02 | 0/0/0 | 0/0/0 | 0/0/0 | 27,390/1,702 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brode_1983.pdf` | Brode E et al., The pharmacokinetics of ameziniummetils…, Arzneimittel-Forschung (1983) | popPK | 10 | not captured | [6686052](https://pubmed.ncbi.nlm.nih.gov/6686052) | The abstract reports specific half-life values (0.6 h, 3.0 h, 12.0 h) for absorption, distribution, and elimination in humans, though full compartmental parameters (CL, V) are not explicitly listed in the provided text. |
| `Kaumeier_1981.pdf` | Kaumeier S et al., Absolute bioavailability of amezinium.…, Arzneimittel-Forschung (1981) | popPK | 10 | not captured | [7197980](https://pubmed.ncbi.nlm.nih.gov/7197980) | The study reports quantitative pharmacokinetic parameters including half-lives, volume of distribution, and bioavailability for amezinium metilsulfate in humans. |
| `Traut_1981.pdf` | Traut M et al., Pharmacokinetics of amezinium in man, Arzneimittel-Forschung (1981) | popPK | 10 | not captured | [7197975](https://pubmed.ncbi.nlm.nih.gov/7197975) | The paper reports quantitative pharmacokinetic parameters (bioavailability, volume of distribution, half-life) for amezinium in humans directly in the text. |
| `Nambu_1988.pdf` | Nambu K et al., Disposition and metabolism of [14C]-ame…, Arzneimittel-Forschung (1988) | popPK | 9 | not captured | [3207436](https://pubmed.ncbi.nlm.nih.gov/3207436) | The study reports quantitative disposition parameters (Cmax, tmax, t1/2) and mass balance data for amezinium metilsulfate in rats, though specific clearance and volume values are not explicitly listed in the text. |
| `Traut_1981_2.pdf` | Traut M et al., Pharmacokinetics of amezinium in rat an…, Arzneimittel-Forschung (1981) | popPK | 9 | not captured | [7197974](https://pubmed.ncbi.nlm.nih.gov/7197974) | The paper reports quantitative pharmacokinetic parameters (absorption half-lives, terminal half-lives, tissue distribution ratios, and clearance descriptions) for amezinium in rats and dogs. |

<sub>queue written 2026-10-06T04:01:56.560753+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araújo_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of amezinium methylsulphate on dog saphenous vein strips, reporting pharmacodynamic effects (ED50, IC50) rather than pharmacokinetic disposition parameters. |
| popPK | Freistühler_1992 | irrelevant | 0 | 0 | The paper is a clinical case report of Shy-Drager syndrome where amezinium methylsulfate is used as a therapeutic agent, but no pharmacokinetic parameters are reported. |
| popPK | Harada_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of vasoconstrictor responses and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for amezinium metilsulfate. |
| popPK | Ishigooka_1999 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of bladder contractility, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Kita_1988 | irrelevant | 0 | 0 | The study reports clinical efficacy (blood pressure changes) but contains no pharmacokinetic parameters (CL, V, t1/2, etc.) for amezinium metilsulfate. |
| popPK | Majewski_1982 | irrelevant | 0 | 0 | The study investigates the pharmacology of noradrenaline in rabbits, using amezinium only as a comparator agent to affect clearance, not as the subject drug for PK parameter estimation. |
| popPK | Neugebauer_1983 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects (blood pressure) and plasma concentrations, but does not provide quantitative disposition parameters (CL, V, t1/2) or a compartmental model. |
| popPK | Paiva_1984 | irrelevant | 0 | 0 | The study investigates the metabolism of 5-hydroxytryptamine (5-HT) in dog saphenous veins, using amezinium only as a pharmacological tool to inhibit metabolism, rather than studying the pharmacokinetics of amezinium itself. |
| popPK | Reicheneder_1981 | irrelevant | 0 | 0 | The paper describes the chemical synthesis and radioactive labeling of the drug, not its pharmacokinetic parameters. |
| popPK | Starke_1981 | irrelevant | 0 | 0 | The study investigates noradrenaline metabolism in guinea-pig atria, and amezinium is only used as a tool compound to inhibit uptake, not as the subject drug for PK analysis. |
| popPK | Traut_1981_3 | irrelevant | 2 | 0 | The paper describes qualitative and quantitative metabolism (excretion of unchanged drug vs metabolites) but does not report quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Wilsmann_1981 | irrelevant | 2 | 0 | The study focuses on hemodynamic and pharmacodynamic effects (blood pressure, heart rate) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Zumstein_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine metabolism in rabbit brain slices where amezinium is used as a pharmacological tool, not a PK study of amezinium itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
