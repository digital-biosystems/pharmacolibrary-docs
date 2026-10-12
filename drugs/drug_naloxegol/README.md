<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naloxegol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Naloxegol_AlHuniti2016_reference&quot;,&quot;label&quot;:&quot;Al-Huniti_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_naloxegol/Naloxegol_AlHuniti2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# naloxegol

- **generic name:** naloxegol
- **ATC codes:** `A06AH03`
- **DrugBank:** [DB09049](https://go.drugbank.com/drugs/DB09049) · **PubChem:** [CID 56959087](https://pubchem.ncbi.nlm.nih.gov/compound/56959087)
- **molar mass:** 651.794 g/mol (C34H53NO11) — DrugBank
- **groups:** approved, investigational

## About

Naloxegol is an opioid antagonist used to treat constipation caused by opioid medicines. It is authorised in the European Union as a drug for constipation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708351](https://www.wikidata.org/wiki/Q15708351) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| naloxegol | parent | 651.794 | C34H53NO11 | DrugBank | [56959087](https://pubchem.ncbi.nlm.nih.gov/compound/56959087) | Al-Huniti_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:00 | 7:32 | 0/0/1 | 0/0/2 | 0/0/0 | 171,937/14,044 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Al-Huniti_2016_reference](drugs/drug_naloxegol/Naloxegol_AlHuniti2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Al-Huniti N et al., Population pharmacokinetics of naloxego…, British journal of clinical… (2016) | [10.1111/bcp.12756](https://doi.org/10.1111/bcp.12756) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Al-Huniti_2016_2_DED](drugs/drug_naloxegol/pd_Al_Huniti_2016_2_DED.md) | diary entry discontinuation ← naloxegol · time-to-event model | — | Al-Huniti N et al., Population Exposure-Response Modeling o…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12099](https://doi.org/10.1002/psp4.12099) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Al-Huniti_2016_2_SBM](drugs/drug_naloxegol/pd_Al_Huniti_2016_2_SBM.md) | number of spontaneous bowel movements (SBMs) ← naloxegol · categorical (graded) response model | — | Al-Huniti N et al., Population Exposure-Response Modeling o…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12099](https://doi.org/10.1002/psp4.12099) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Al-Huniti_2017_SBM_response](drugs/drug_naloxegol/pd_Al_Huniti_2017_SBM_response.md) | weekly probability of response ← naloxegol · categorical (graded) response model | — | Al-Huniti N et al., Population Exposure-Response Modeling S…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12229](https://doi.org/10.1002/psp4.12229) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Al-Huniti_2017_dropout](drugs/drug_naloxegol/pd_Al_Huniti_2017_dropout.md) | time to discontinuation ← naloxegol · time-to-event model | — | Al-Huniti N et al., Population Exposure-Response Modeling S…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12229](https://doi.org/10.1002/psp4.12229) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Huniti_2016.pdf` | Al-Huniti N et al., Population pharmacokinetics of naloxego…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12756](https://doi.org/10.1111/bcp.12756) | [26317320](https://pubmed.ncbi.nlm.nih.gov/26317320) | The paper reports a population PK model for naloxegol with explicit numeric values for CL/F, Vc/F, and absorption rate constants in the abstract. |
| `Hruska_2024.pdf` | Hruska MW et al., Population Pharmacokinetics of Naloxego…, Clinical pharmacology in dr… (2024) | popPK | 10 | [10.1002/cpdd.1457](https://doi.org/10.1002/cpdd.1457) | [39110083](https://pubmed.ncbi.nlm.nih.gov/39110083) | The paper describes a population PK model for naloxegol, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Yu_2016.pdf` | Yu J et al., Key Findings from Preclinical and Clini…, Drug metabolism and disposi… (2016) | pgx | 8 | [10.1124/dmd.115.066720](https://doi.org/10.1124/dmd.115.066720) | [26424199](https://www.ncbi.nlm.nih.gov/pubmed/26424199) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Yu_2018.pdf` | Yu J et al., Risk of Clinically Relevant Pharmacokin…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.117.078691](https://doi.org/10.1124/dmd.117.078691) | [29572333](https://www.ncbi.nlm.nih.gov/pubmed/29572333) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-04T16:54:03.847808+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Al-Huniti_2016 | not_relevant | 0 | 0 | The study analyzes demographic and clinical covariates (e.g., CYP3A4 inhibitors, race, gender) but does not report any pharmacogenomic effects based on specific gene variants or genotypes. |
| popPK | Al-Huniti_2017 | irrelevant | 0 | 0 | The paper describes a population exposure-response (efficacy) model for dose selection, not a pharmacokinetic model, and does not report quantitative PK parameters like clearance or volume. |
| PGx | Bui_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with CYP3A modulators, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Coluzzi_2022 | not_relevant | 2 | 0 | The paper is a general review of P-glycoprotein and opioids; it mentions naloxegol as a P-gp substrate but does not report specific pharmacogenomic data or quantitative PK/PD effects of gene variants on naloxegol. |
| PGx | Gudin_2020 | not_relevant | 0 | 0 | The paper discusses drug-drug and drug-food interactions affecting naloxegol PK, but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hruska_2024 | relevant | 10 | 0 | The paper describes a population PK model for naloxegol, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Lawson_2016 | irrelevant | 0 | 0 | The paper is a health utility analysis of naloxegol's efficacy on constipation and does not report any pharmacokinetic parameters. |
| PGx | Leppert_2016 | not_relevant | 3 | 5 | The paper mentions a potential association between CYP3A5 polymorphism and race-based PK differences (AUC/Cmax), but it is a review article that cites other studies rather than reporting primary pharmacogenomic data or fitted effect sizes for specific gene variants. |
| PGx | Yu_2016 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions (DDIs) and mentions naloxegol only as a CYP3A substrate, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Yu_2018 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDIs) involving CYP3A and transporters, not pharmacogenomic effects of gene variants on naloxegol's PK/PD. |
| PGx | Zhou_2016 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) mediated by CYP3A and P-gp modulators, not on pharmacogenomic effects of genetic variants on naloxegol PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 16:54 UTC</sub>
