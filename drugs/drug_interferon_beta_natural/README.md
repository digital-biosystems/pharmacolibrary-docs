<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;interferon beta natural&quot;}]"></div>

# interferon beta natural

- **generic name:** interferon beta natural
- **ATC codes:** `L03AB02`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Interferon beta (natural) is an immunostimulant drug used mainly to treat multiple sclerosis. It is an established disease-modifying therapy, given by injection, and remains in clinical use in many countries.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 23:08 | 3:09 | 0/0/0 | 0/0/0 | 0/0/0 | 55,266/1,872 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 232 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chiang_1993.pdf` | Chiang J et al., Pharmacokinetics and antiviral activity…, Journal of interferon resea… (1993) | popPK | 10 | [10.1089/jir.1993.13.111](https://doi.org/10.1089/jir.1993.13.111) | [8509658](https://pubmed.ncbi.nlm.nih.gov/8509658) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for recombinant human interferon-beta (an interferon_beta_natural analog) in African green monkeys. |
| `Hilfenhaus_1981.pdf` | Hilfenhaus J et al., Pharmacokinetics of human interferon-be…, Journal of interferon resea… (1981) | popPK | 8 | [10.1089/jir.1981.1.427](https://doi.org/10.1089/jir.1981.1.427) | [6180075](https://pubmed.ncbi.nlm.nih.gov/6180075) | The study reports quantitative serum and CSF concentrations (IU/mL) and qualitative clearance trends for interferon-beta in monkeys, though it lacks explicit compartmental PK parameter estimates like CL or V. |
| `Satoh_1984.pdf` | Satoh YI et al., Different pharmacokinetics between natu…, Journal of interferon resea… (1984) | popPK | 5 | [10.1089/jir.1984.4.411](https://doi.org/10.1089/jir.1984.4.411) | [6491398](https://pubmed.ncbi.nlm.nih.gov/6491398) | The study reports that pharmacokinetic parameters exist and differ, but no numeric values for clearance, volume, or rate constants are provided in the evidence. |

<sub>queue written 2026-10-06 23:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | David_2012 | irrelevant | 0 | 0 | The paper is a clinical pharmacokinetics review for fingolimod, not interferon_beta_natural. |
| popPK | Dondelinger_2016 | irrelevant | 0 | 0 | The paper discusses the evolutionary conservation of the necroptotic pathway and interferon-beta signaling, not the pharmacokinetics of interferon_beta_natural. |
| popPK | Fogdell-Hahn_2015 | irrelevant | 0 | 0 | The paper is a review of antidrug antibodies and immunology, not a pharmacokinetic study, and contains no quantitative PK parameters for interferon beta. |
| popPK | Furue_1984 | irrelevant | 1 | 0 | The paper describes pharmacokinetics qualitatively without reporting any quantitative parameters (clearance, volume, half-life, ka) in the provided evidence. |
| popPK | Furue_1987 | irrelevant | 0 | 0 | The study investigates interferon-gamma, which is a different drug from the target interferon-beta. |
| popPK | Halme_1994 | irrelevant | 0 | 0 | The study reports that interferon-beta was not detectable in serum, so no quantitative pharmacokinetic parameters were generated. |
| popPK | Karupiah_1993 | irrelevant | 0 | 0 | The study focuses on the immunological role of interferons in viral recovery in mice and contains no pharmacokinetic parameters. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The paper focuses on the anti-septic properties of Lonicera japonica extract in mice and does not report pharmacokinetic parameters for interferon_beta_natural. |
| popPK | Krishnamoorthy_2023 | irrelevant | 0 | 0 | The paper investigates Maresin 1's effects on RSV-induced inflammation in mice and mentions interferon-beta expression as a downstream biomarker, but contains no pharmacokinetic modeling or quantitative disposition parameters for interferon_beta_natural. |
| popPK | Mandatori_2023 | irrelevant | 0 | 0 | The paper investigates the immunological mechanism of IFN-β in T-cell differentiation and does not contain any pharmacokinetic data or disposition parameters for the drug. |
| popPK | Meyer_2009 | irrelevant | 0 | 0 | This is a general review of interferons in autoimmune disorders and contains no quantitative pharmacokinetic parameters (e.g., CL, V, ka) for interferon_beta_natural. |
| popPK | Nokta_1991 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters (half-life, metabolic rate, volume of distribution) for zidovudine (AZT), not for interferon_beta_natural, which serves only as the co-administered drug affecting AZT metabolism. |
| popPK | Ramamurthy_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of IFN-beta activity reduction by fibroblasts, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Satoh_1984 | irrelevant | 5 | 0 | The study reports that pharmacokinetic parameters exist and differ, but no numeric values for clearance, volume, or rate constants are provided in the evidence. |
| popPK | Schectman_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of interferon beta on LDL metabolism, not the pharmacokinetics of interferon beta itself. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | The study investigates the efficacy of AHCC supplementation for clearing HPV infections and measures IFN-β as an immune marker, not as a dosed drug for pharmacokinetic analysis. |
| popPK | Stoszko_2016 | irrelevant | 0 | 0 | The study focuses on HIV-1 latency reversal mechanisms using BAF inhibitors and does not report pharmacokinetic parameters for interferon_beta_natural. |
| popPK | Takahashi_2020 | irrelevant | 1 | 0 | This is a pharmacogenomic review that discusses IFN-β1b's safety and immunogenicity (neutralizing antibodies, liver injury genetics) but provides no quantitative pharmacokinetic disposition parameters (CL, V, t1/2, or compartmental models). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binterferon_beta_natural%5D&body=Drug%3A%20interferon_beta_natural%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_interferon_beta_natural/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
