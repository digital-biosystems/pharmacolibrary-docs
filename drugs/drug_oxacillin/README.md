<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;oxacillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxacillin_Lee2026_reference&quot;,&quot;label&quot;:&quot;Lee_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxacillin/Oxacillin_Lee2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxacillin_Murnov2022_reference&quot;,&quot;label&quot;:&quot;Mur\u00ednov\u00e1_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxacillin/Oxacillin_Murnov2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# oxacillin

- **generic name:** oxacillin
- **ATC codes:** `J01CF04`
- **DrugBank:** [DB00713](https://go.drugbank.com/drugs/DB00713) · **PubChem:** [CID 6196](https://pubchem.ncbi.nlm.nih.gov/compound/6196)
- **molar mass:** 401.436 g/mol (C19H19N3O5S) — DrugBank
- **groups:** approved, investigational

## About

Oxacillin is a penicillin antibiotic used to treat staphylococcal infections, including sepsis, urinary tract infections, cellulitis, osteomyelitis, infective endocarditis, and bacterial meningitis. It is an approved beta-lactamase–resistant penicillin, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418725](https://www.wikidata.org/wiki/Q418725) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxacillin | parent | 401.436 | C19H19N3O5S | DrugBank | [6196](https://pubchem.ncbi.nlm.nih.gov/compound/6196) | Lee_2026, Murínová_2022 |

## Start here

> **Lee_2026_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> preterm and term neonates and infants. [Run it in the simulator](drugs/drug_oxacillin/Oxacillin_Lee2026_reference.md?tab=Simulation) · [record](drugs/drug_oxacillin/Oxacillin_Lee2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.01 | L/h | 1.01 L/h | preterm and term neonates and infants |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Lee_2026_reference](drugs/drug_oxacillin/Oxacillin_Lee2026_reference.md) |
| V | V | 1.87 | L | 1.87 L | preterm and term neonates and infants |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Lee_2026_reference](drugs/drug_oxacillin/Oxacillin_Lee2026_reference.md) |
| V | V | 11.2 | L | 11.2 L | patients with staphylococcal infections | ? | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Murínová_2022_reference](drugs/drug_oxacillin/Oxacillin_Murnov2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Lee_2026 · V</text><circle cx="237.6" cy="30.0" r="4" fill="#2e7d32"><title>Lee_2026 · V: 1.87 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Murínová_2022 · V</text><circle cx="373.6" cy="46.0" r="4" fill="#ef6c00"><title>Murínová_2022 · V: 11.2 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Lee_2026_reference](drugs/drug_oxacillin/Oxacillin_Lee2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Lee A et al., Population pharmacokinetics and safety…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01777-25](https://doi.org/10.1128/aac.01777-25) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_t_half_beta</sub> | [Murínová_2022_reference](drugs/drug_oxacillin/Oxacillin_Murnov2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Murínová I et al., Population Pharmacokinetic Analysis Pro…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11121736](https://doi.org/10.3390/antibiotics11121736) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Baudoux_2007_CFU](drugs/drug_oxacillin/pd_Baudoux_2007_CFU.md) | log(10) colony-forming unit changes at 24 h ← oxacillin · direct sigmoid Emax (Hill) effect | — | Baudoux P et al., Combined effect of pH and concentration…, The Journal of antimicrobia… (2007) | [10.1093/jac/dkl489](https://doi.org/10.1093/jac/dkl489) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Rodriguez_2010_E](drugs/drug_oxacillin/pd_Rodriguez_2010_E.md) | net antibacterial effect (log10 CFU/g) after 24 h of treatment ← oxacillin · direct sigmoid Emax (Hill) effect | model (no simulator) | Rodriguez CA et al., In vitro and in vivo comparison of the…, BMC infectious diseases (2010) | [10.1186/1471-2334-10-153](https://doi.org/10.1186/1471-2334-10-153) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Rodriguez_2010_E_2](drugs/drug_oxacillin/pd_Rodriguez_2010_E_2.md) | net antibacterial effect (log10 CFU/g) after 24 h of treatment ← oxacillin · inhibition effect | model (no simulator) | Rodriguez CA et al., In vitro and in vivo comparison of the…, BMC infectious diseases (2010) | [10.1186/1471-2334-10-153](https://doi.org/10.1186/1471-2334-10-153) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oxacillin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` binder/inhibitor | DrugBank actor |
| excretion | kidney | `SLC15A2` binder/inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:12 | 2:56 | 2/0/0 | 2/0/0 | 0/0/0 | 173,814/8,335 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wirth_1976.pdf` | Wirth K et al., [Kinetics of ampicillin, oxacillin and…, Arzneimittel-Forschung (1976) | popPK | 10 | not captured | [1036706](https://pubmed.ncbi.nlm.nih.gov/1036706) | The study is a PK study of oxacillin in humans, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| `Fukumura_1999.pdf` | Fukumura K et al., Analysis program based on finite elemen…, Journal of pharmaceutical s… (1999) | popPK | 9 | [10.1021/js9803757](https://doi.org/10.1021/js9803757) | [10229646](https://pubmed.ncbi.nlm.nih.gov/10229646) | Study reports quantitative kinetic parameters (Vmax, Km, ke) for oxacillin in rat liver. |

<sub>queue written 2026-10-07T10:10:23.408610+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adam_1979 | irrelevant | 2 | 0 | The study focuses on broad-spectrum penicillin combinations where oxacillin is a co-administered component, and no specific quantitative PK values for oxacillin are provided in the evidence. |
| popPK | Baudoux_2007 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of antibiotic activity and accumulation, not a pharmacokinetic study of oxacillin disposition parameters. |
| popPK | Dilworth_2014 | irrelevant | 0 | 0 | The study is an in vitro PK/PD model focusing on vancomycin and piperacillin-tazobactam; oxacillin is mentioned only as a susceptibility marker (MIC) and is not the subject drug. |
| popPK | Fukumura_1998 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding oxacillin pharmacokinetics. |
| popPK | Głowacka_2021 | irrelevant | 0 | 0 | The study is a medicinal chemistry paper focusing on the synthesis and antimicrobial adjuvant activity (MIC changes) of azetidin-2-ones, not a pharmacokinetic study reporting disposition parameters for oxacillin. |
| popPK | Pullen_2006 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for flucloxacillin, not oxacillin, although oxacillin is mentioned only as a susceptibility breakpoint. |
| popPK | Rodriguez_2010 | irrelevant | 1 | 0 | The study compares the antibacterial efficacy of oxacillin generics using a pharmacodynamic model (dose-response), reporting parameters like ED50 and Emax, but does not provide pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Sader_2007 | irrelevant | 0 | 0 | Oxacillin is used only as a susceptibility marker for the subject drugs (cephalosporins), and the paper does not report oxacillin PK parameters. |
| popPK | Scherf_2020 | irrelevant | 0 | 0 | The study investigates the antibacterial and toxicological properties of terpinolene using oxacillin only as a diagnostic agent to measure MIC reduction, without reporting any pharmacokinetic parameters for oxacillin. |
| popPK | Wirth_1976 | relevant | 10 | 0 | The study is a PK study of oxacillin in humans, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| popPK | Yano_1989 | irrelevant | 2 | 8 | The study applies a specialized organ perfusion dispersion model to rat liver data, reporting parameters like blood space (VB) and dispersion number (DN) rather than standard population pharmacokinetic parameters (CL, V, ka). |
| popPK | Yano_1990 | irrelevant | 3 | 2 | The study reports hepatic uptake parameters (partition ratio, elimination rate constant) from an isolated perfused liver experiment, not the standard population pharmacokinetic parameters (CL, V, Q, ka) for the whole organism. |
| popPK | del_2015 | irrelevant | 0 | 0 | The study focuses on intravitreal PK modeling and does not report pharmacokinetic parameters for oxacillin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:10 UTC</sub>
