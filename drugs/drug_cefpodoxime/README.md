<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefpodoxime&quot;}]"></div>

# cefpodoxime

- **generic name:** cefpodoxime
- **ATC codes:** `J01DD13`
- **DrugBank:** [DB01416](https://go.drugbank.com/drugs/DB01416) · **PubChem:** [CID 6335986](https://pubchem.ncbi.nlm.nih.gov/compound/6335986)
- **molar mass:** 427.455 g/mol (C15H17N5O6S2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Cefpodoxime is a third-generation cephalosporin antibiotic used to treat infections such as gonorrhea, bronchitis, tonsillitis, otitis media, cystitis, pharyngitis, and acute maxillary sinusitis. It is an approved antibacterial, also approved for veterinary use, and is used in human medicine as well as in animals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415173](https://www.wikidata.org/wiki/Q415173) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefpodoxime | parent | 427.455 | C15H17N5O6S2 | DrugBank | [6335986](https://pubchem.ncbi.nlm.nih.gov/compound/6335986) | Linnehan_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Linnehan_2024_reference](drugs/drug_cefpodoxime/Cefpodoxime_Linnehan2024_reference.md) | — | 1-compartment (no model) | 3 | Linnehan BK et al., POPULATION PHARMACOKINETICS OF CEFPODOX…, Journal of zoo and wildlife… (2024) | [10.1638/2023-0139](https://doi.org/10.1638/2023-0139) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefpodoxime).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:11 | 1:15 | 0/1/0 | 0/0/0 | 0/0/0 | 80,602/2,580 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kearns_1998.pdf` | Kearns GL et al., Cefpodoxime pharmacokinetics in childre…, The Pediatric infectious di… (1998) | popPK | 10 | [10.1097/00006454-199809000-00010](https://doi.org/10.1097/00006454-199809000-00010) | [9779765](https://pubmed.ncbi.nlm.nih.gov/9779765) | The study reports quantitative pharmacokinetic parameters for cefpodoxime, including absorption rate (Ka) and time to maximum concentration (Tmax) for fed and fasted conditions, though clearance and volume values are not explicitly provided in the text. |
| `Linnehan_2024.pdf` | Linnehan BK et al., POPULATION PHARMACOKINETICS OF CEFPODOX…, Journal of zoo and wildlife… (2024) | popPK | 10 | [10.1638/2023-0139](https://doi.org/10.1638/2023-0139) | [39255202](https://pubmed.ncbi.nlm.nih.gov/39255202) | The paper reports a population pharmacokinetic model for cefpodoxime in bottlenose dolphins with key parameters (Cmax, Tmax, t1/2) in the abstract, but specific clearance (CL) and volume (V) values are likely in the full text/tables not provided. |
| `Abdel-Rahman_2000.pdf` | Abdel-Rahman SM et al., Cerebrospinal fluid pharmacokinetics of…, Journal of clinical pharmac… (2000) | popPK | 9 | [10.1177/00912700022008964](https://doi.org/10.1177/00912700022008964) | [10709158](https://pubmed.ncbi.nlm.nih.gov/10709158) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, AUC) and a compartmental model for cefpodoxime in piglets. |

<sub>queue written 2026-10-07T11:10:32.410354+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liu_2005 | irrelevant | 1 | 0 | The study is an in vitro PK-PD simulation using simulated human PK profiles rather than an original study reporting quantitative disposition parameters (CL, V, ka) for cefpodoxime. |
| popPK | Nicolaos_2003 | relevant | 4 | 1 | The study is a pharmacokinetic investigation in rats reporting bioavailability and standard NCA parameters, but specific numeric values for cefpodoxime's clearance, volume, or half-life are not present in the provided evidence. |
| popPK | ODonnell_2020 | irrelevant | 2 | 2 | The paper focuses on the PK of the beta-lactamase inhibitor ETX1317 and its prodrug ETX0282, with cefpodoxime serving only as a companion drug for efficacy and PK/PD modeling rather than being the primary subject of a PK characterization study. |
| popPK | Torumkuney_2020_2 | irrelevant | 0 | 0 | This is an antimicrobial susceptibility surveillance study reporting MIC and breakpoint data, not a pharmacokinetic study of cefpodoxime. |
| popPK | Torumkuney_2020_3 | irrelevant | 0 | 0 | This is an antimicrobial susceptibility survey (MICs) reporting PK/PD breakpoints, not a study measuring pharmacokinetic parameters (CL, V, ka) for cefpodoxime. |
| popPK | Torumkuney_2025 | irrelevant | 0 | 0 | This is an antimicrobial susceptibility study (MICs) for S. pneumoniae and H. influenzae, not a pharmacokinetic study, and contains no PK parameters for cefpodoxime. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:10 UTC</sub>
