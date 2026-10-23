<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;desloratadine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desloratadine_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_desloratadine/Desloratadine_Li2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# desloratadine

- **generic name:** desloratadine
- **ATC codes:** `R06AX27`
- **DrugBank:** [DB00967](https://go.drugbank.com/drugs/DB00967) · **PubChem:** [CID 124087](https://pubchem.ncbi.nlm.nih.gov/compound/124087)
- **molar mass:** 310.821 g/mol (C19H19ClN2) — DrugBank
- **groups:** approved, investigational

## About

Desloratadine is a non-sedating antihistamine used to treat allergic rhinitis and urticaria. It is approved and widely used, with several products authorised in the European Union for these allergies.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418060](https://www.wikidata.org/wiki/Q418060) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desloratadine | parent | 310.821 | C19H19ClN2 | DrugBank | [124087](https://pubchem.ncbi.nlm.nih.gov/compound/124087) | Gupta_2007 |

## Start here

> **Li_2023_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_desloratadine/Desloratadine_Li2023_reference.md?tab=Simulation) · [record](drugs/drug_desloratadine/Desloratadine_Li2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 14.7 ‡ | L/h | 0.21 L/h/kg | review reference |  | rat | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Li_2023_reference](drugs/drug_desloratadine/Desloratadine_Li2023_reference.md) |
| CL | CL/F | 27.8 | L/h | 27.8 l h(-1) | children aged 6 months to 2 years | : 58 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2007_reference](drugs/drug_desloratadine/Desloratadine_Gupta2007_reference.md) |
| V | V | 48.3 ‡ | L | 0.69 L/kg | review reference |  | rat | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Li_2023_reference](drugs/drug_desloratadine/Desloratadine_Li2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Li_2023 · CL ·/kg</text><circle cx="248.6" cy="30.0" r="4" fill="#2e7d32"><title>Li_2023 · CL ·/kg: 14.7 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Gupta_2007 · CL/F</text><circle cx="345.4" cy="46.0" r="4" fill="#ef6c00"><title>Gupta_2007 · CL/F: 27.8 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rat</span> | [Li_2023_reference](drugs/drug_desloratadine/Desloratadine_Li2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li G et al., An exploration on retro-construction of…, Translational pediatrics (2023) | [10.21037/tp-22-505](https://doi.org/10.21037/tp-22-505) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Gupta_2007_reference](drugs/drug_desloratadine/Desloratadine_Gupta2007_reference.md) | — | 1-compartment (no model) | 1 | Gupta SK et al., Desloratadine dose selection in childre…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02859.x](https://doi.org/10.1111/j.1365-2125.2007.02859.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Peña_2008_flare](drugs/drug_desloratadine/pd_Pe_a_2008_flare.md) | histamine-induced flare reaction ← desloratadine · indirect response — drug inhibits the production of histamine-induced flare reaction | — | Peña J et al., Antihistaminic effects of rupatadine an…, European journal of drug me… (2008) | [10.1007/BF03191027](https://doi.org/10.1007/BF03191027) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=desloratadine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:28 | 1:10 | 2/0/0 | 1/0/0 | 0/0/0 | 87,021/7,549 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2007.pdf` | Gupta SK et al., Desloratadine dose selection in childre…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02859.x](https://doi.org/10.1111/j.1365-2125.2007.02859.x) | [17324243](https://pubmed.ncbi.nlm.nih.gov/17324243) | The study reports quantitative population pharmacokinetic parameters, specifically apparent clearance (CL/F), for desloratadine in children and adults directly in the abstract text. |
| `Peña_2008.pdf` | Peña J et al., Antihistaminic effects of rupatadine an…, European journal of drug me… (2008) | popPK | 9 | [10.1007/BF03191027](https://doi.org/10.1007/BF03191027) | [18777946](https://pubmed.ncbi.nlm.nih.gov/18777946) | The paper describes a population PK model for desloratadine (active metabolite of rupatadine), but the specific numeric parameter values are not provided in the evidence snippet. |

<sub>queue written 2026-10-07T21:27:19.723955+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anthes_2002 | irrelevant | 0 | 0 | The study characterizes the binding kinetics of desloratadine to histamine H1 receptors in vitro, not its pharmacokinetic disposition parameters in a biological system. |
| popPK | Iesce_2019 | irrelevant | 0 | 0 | The study focuses on ecotoxicity in aquatic organisms and reports LC50/EC50 values, not pharmacokinetic parameters for desloratadine. |
| popPK | Li_2023 | relevant | 8 | 2 | The study validates a PK modeling method using desloratadine in rats and mentions derived parameters like CLr in Table 1, but the specific numeric values are not present in the provided text evidence. |
| popPK | Lin_2024 | irrelevant | 3 | 4 | The study is a bioequivalence trial for rupatadine where desloratadine is a secondary metabolite, and it reports non-compartmental parameters (AUC, Cmax) rather than disposition parameters (CL, V, ka, half-life with volume) or population models for desloratadine. |
| popPK | Peña_2008 | relevant | 9 | 0 | The paper describes a population PK model for desloratadine (active metabolite of rupatadine), but the specific numeric parameter values are not provided in the evidence snippet. |
| popPK | Roquini_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of desloratadine's anthelmintic activity against parasites, containing no pharmacokinetic disposition parameters. |
| popPK | Salem_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of loratadine, not desloratadine, and provides no data for the target drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:27 UTC</sub>
