<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;casopitant&quot;}]"></div>

# casopitant

- **generic name:** casopitant
- **ATC codes:** `A04AD13`
- **DrugBank:** [DB06634](https://go.drugbank.com/drugs/DB06634) · **PubChem:** not captured
- **molar mass:** 616.625 g/mol (C30H35F7N4O2) — DrugBank
- **groups:** investigational

## About

Casopitant is an investigational antiemetic (an NK1 receptor antagonist) studied for preventing nausea and vomiting, including postoperative nausea and vomiting and vomiting associated with cancer treatment. It was never marketed; its European Union marketing application was withdrawn, so it remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5049003](https://www.wikidata.org/wiki/Q5049003) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

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
| 2026-10-04 13:48 | 0:36 | 0/0/0 | 0/0/0 | 0/0/0 | 11,884/552 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zamuner_2012.pdf` | Zamuner S et al., A pharmacokinetic PET study of NK₁ rece…, European journal of nuclear… (2012) | popPK | 8 | [10.1007/s00259-011-1954-2](https://doi.org/10.1007/s00259-011-1954-2) | [21993526](https://pubmed.ncbi.nlm.nih.gov/21993526) | The study reports a population PK model for casopitant in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Johnson_2010.pdf` | Johnson BM et al., Ketoconazole and rifampin significantly…, Journal of clinical pharmac… (2010) | pgx | 7 | [10.1177/0091270009353761](https://doi.org/10.1177/0091270009353761) | [20124517](https://www.ncbi.nlm.nih.gov/pubmed/20124517) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zamuner_2010.pdf` | Zamuner S et al., Effect of single and repeat doses of ca…, British journal of clinical… (2010) | pgx | 7 | [10.1111/j.1365-2125.2010.03729.x](https://doi.org/10.1111/j.1365-2125.2010.03729.x) | [20840445](https://www.ncbi.nlm.nih.gov/pubmed/20840445) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-10-04T13:48:01.270125+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adams_2009 | not_relevant | 0 | 0 | The study investigates the effect of casopitant on the pharmacokinetics of other drugs (dolasetron and granisetron), not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of casopitant itself. |
| popPK | Adams_2014 | irrelevant | 1 | 0 | The study assesses the effect of casopitant on the pharmacokinetics of cyclophosphamide, not the disposition parameters of casopitant itself. |
| PD | Adams_2014 | not_relevant | 1 | 0 | The study assesses the effect of casopitant on cyclophosphamide PK and safety (WBC), but does not report a concentration-effect or dose-response relationship for casopitant itself with numeric PD parameters. |
| popPK | Di_2011 | irrelevant | 0 | 0 | The paper is a drug discovery and biological characterization study for casopitant, focusing on receptor affinity and selection as a clinical candidate, without reporting quantitative pharmacokinetic disposition parameters. |
| PD | Di_2011 | not_relevant | 0 | 0 | The paper describes the discovery and biological characterization of casopitant, focusing on receptor affinity and physicochemical properties, but does not report any pharmacodynamic (PD) or exposure-response models with numeric parameters. |
| PGx | Johnson_2010 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole/rifampin) affecting casopitant PK, not pharmacogenomic effects based on genetic variants. |
| popPK | Kirby_2010 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of warfarin (the subject drug) to assess a drug-drug interaction, and does not report quantitative disposition parameters for casopitant. |
| PD | Kirby_2010 | not_relevant | 2 | 1 | The study reports a drug-drug interaction effect on warfarin PK and INR (a PD marker) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for casopitant. |
| PGx | Kirby_2010 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between casopitant and warfarin, not a pharmacogenomic effect on casopitant's PK/PD. |
| popPK | Minthorn_2008 | relevant | 8 | 2 | The paper is a pharmacokinetic study of casopitant in ferrets, but the provided evidence contains only qualitative descriptions and metabolite percentages, lacking specific numeric values for clearance, volume, or half-life. |
| PD | Minthorn_2008 | not_relevant | 1 | 0 | The paper reports pharmacokinetics and brain penetration data but does not provide numeric pharmacodynamic parameters (e.g., Emax, EC50) or an exposure-response curve for casopitant. |
| PGx | Motta_2011 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) involving CYP3A4 inhibitors and inducers, not pharmacogenomic variants affecting casopitant's PK or PD. |
| popPK | Roila_2009 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for antiemetic prevention and does not report any pharmacokinetic parameters for casopitant. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis of clinical efficacy for postoperative nausea and vomiting, not a pharmacokinetic study, and it reports no PK parameters for casopitant. |
| PD | Weibel_2020 | not_relevant | 1 | 0 | The paper is a network meta-analysis comparing clinical efficacy (risk ratios) of antiemetics, including casopitant, but it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Zamuner_2010 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (CYP3A inhibition) in healthy subjects, not the effect of a gene variant or genotype on casopitant's PK/PD. |
| popPK | Zamuner_2012 | relevant | 8 | 2 | The study reports a population PK model for casopitant in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
