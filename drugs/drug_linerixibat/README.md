<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;linerixibat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linerixibat_ZamekGliszczynski2021_reference&quot;,&quot;label&quot;:&quot;Zamek-Gliszczynski_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# linerixibat

- **generic name:** linerixibat
- **ATC codes:** `A05AX08`
- **DrugBank:** [DB11729](https://go.drugbank.com/drugs/DB11729) · **PubChem:** [CID 53492727](https://pubchem.ncbi.nlm.nih.gov/compound/53492727)
- **molar mass:** 546.68 g/mol (C28H38N2O7S) — DrugBank
- **groups:** investigational

## About

Linerixibat is an investigational bile acid inhibitor being studied for cholestatic itching associated with liver disease. It is not yet approved and remains under clinical investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27256749](https://www.wikidata.org/wiki/Q27256749) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Zamek-Gliszczynski_2021_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> healthy male volunteers. [Run it in the simulator](drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md?tab=Simulation) · [record](drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 61.9 | L/h | 61.9 l/h | healthy male volunteers | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zamek-Gliszczynski_2021_reference](drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md) |
| V | V | 16.3 | L | 16.3 l | healthy male volunteers | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zamek-Gliszczynski_2021_reference](drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md) |
| F | Fab | 0.05 |  | 0.05 % | healthy male volunteers | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zamek-Gliszczynski_2021_reference](drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Zamek-Gliszczynski_2021_reference](drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Zamek-Gliszczynski MJ et al., Pharmacokinetics and ADME Characterizat…, Drug metabolism and disposi… (2021) | [10.1124/dmd.121.000595](https://doi.org/10.1124/dmd.121.000595) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Carreño_2025_C4](drugs/drug_linerixibat/pd_Carre_o_2025_C4.md) | C4 ← linerixibat · indirect response — drug stimulates the production of C4 | model (no simulator) | Carreño F et al., Analysis of C4 Concentrations to Predic…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13300](https://doi.org/10.1002/psp4.13300) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:27 | 1:24 | 1/0/0 | 1/0/0 | 0/0/0 | 59,216/1,541 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zamek-Gliszczynski_2021.pdf` | Zamek-Gliszczynski MJ et al., Pharmacokinetics and ADME Characterizat…, Drug metabolism and disposi… (2021) | popPK | 10 | [10.1124/dmd.121.000595](https://doi.org/10.1124/dmd.121.000595) | [34625435](https://pubmed.ncbi.nlm.nih.gov/34625435) | The abstract explicitly reports quantitative PK parameters including clearance (61.9 l/h), volume of distribution (16.3 l), and half-lives for linerixibat in humans. |
| `Karatza_2024.pdf` | Karatza E et al., Serum bile acid change correlates with…, Liver international : offic… (2024) | pd | 4 | [10.1111/liv.15982](https://doi.org/10.1111/liv.15982) | [38780109](https://www.ncbi.nlm.nih.gov/pubmed/38780109) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-04T14:26:24.125581+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Billo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro transporter inhibition study (IC50 values) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for linerixibat. |
| popPK | Carreño_2024 | irrelevant | 2 | 0 | The paper describes a kinetic-pharmacodynamic (k-PD) analysis for dose selection but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for linerixibat in the provided evidence. |
| popPK | Carreño_2025 | irrelevant | 2 | 0 | The study models the pharmacodynamics of the biomarker C4 (a bile acid synthesis intermediate) rather than the pharmacokinetics of linerixibat itself, explicitly noting that plasma PK data are unavailable due to low bioavailability. |
| popPK | Karatza_2024 | irrelevant | 0 | 0 | The provided evidence contains only the title of a clinical study focusing on pruritus and bile acid changes, with no pharmacokinetic parameters or numeric values for linerixibat. |
| popPK | Levy_2023 | irrelevant | 0 | 0 | The paper is a Phase 2b clinical efficacy trial for pruritus and does not report any pharmacokinetic parameters or disposition data for linerixibat. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis (Phase IIb) reporting itch scores and adverse events, with no pharmacokinetic parameters or disposition data for linerixibat. |
| PD | Tanaka_2023 | not_relevant | 3 | 2 | The paper reports clinical dose-response outcomes (itch score reduction) and mentions PD biomarkers qualitatively, but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| PGx | Zamek-Gliszczynski_2021 | not_relevant | 0 | 0 | The study characterizes the PK of linerixibat in healthy volunteers but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | Linerixibat is used only as an ASBT inhibitor to probe the transport mechanism of andrographolide, not as the subject drug for PK parameter estimation. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic biomarkers and mediators of pruritus, not pharmacokinetic disposition parameters. |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 14:26 UTC</sub>
