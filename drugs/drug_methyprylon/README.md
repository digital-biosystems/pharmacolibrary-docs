<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;methyprylon&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyprylon_Gwilt1985_reference&quot;,&quot;label&quot;:&quot;Gwilt_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# methyprylon

- **generic name:** methyprylon
- **ATC codes:** `N05CE02`
- **DrugBank:** [DB01107](https://go.drugbank.com/drugs/DB01107) · **PubChem:** [CID 4162](https://pubchem.ncbi.nlm.nih.gov/compound/4162)
- **molar mass:** 183.2475 g/mol (C10H17NO2) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Methyprylon is a sedative-hypnotic drug that was used to treat insomnia. It has been withdrawn from the market, largely because of its potential for abuse and dependence.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409558](https://www.wikidata.org/wiki/Q409558) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methyprylon | parent | 183.248 | C10H17NO2 | DrugBank | [4162](https://pubchem.ncbi.nlm.nih.gov/compound/4162) | Gwilt_1982, Gwilt_1985 |

## Start here

> **Gwilt_1985_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers, n = 10. [Run it in the simulator](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md?tab=Simulation) · [record](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.8337 ‡ | L/h | 11.91 mL/h/kg | healthy volunteers | 10 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gwilt_1985_reference](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md) |
| t½ | t1/2z | 9.2 | h | 9.2 h | healthy volunteers | 10 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gwilt_1985_reference](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Gwilt_1985_reference](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Gwilt PR et al., Pharmacokinetics of methyprylon followi…, Journal of pharmaceutical s… (1985) | [10.1002/jps.2600740920](https://doi.org/10.1002/jps.2600740920) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Gwilt_1982_caster_oil](drugs/drug_methyprylon/Methyprylon_Gwilt1982_caster_oil.md) | — | 2-compartment (no model) | 9 | Gwilt PR et al., The effect of oral castor oil on the di…, Canadian Anaesthetists' Soc… (1982) | [10.1007/BF03007530](https://doi.org/10.1007/BF03007530) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ control](drugs/drug_methyprylon/Methyprylon_Gwilt1982_control.md) | — | 2-compartment (no model) | 9 |  |  |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methyprylon).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:42 | 1:33 | 1/2/0 | 0/0/0 | 0/0/0 | 40,837/3,381 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gwilt_1985.pdf` | Gwilt PR et al., Pharmacokinetics of methyprylon followi…, Journal of pharmaceutical s… (1985) | popPK | 10 | [10.1002/jps.2600740920](https://doi.org/10.1002/jps.2600740920) | [2866242](https://pubmed.ncbi.nlm.nih.gov/2866242) | Original PK study of methyprylon in humans with numeric CL, Vd, and half-life values present in the abstract. |
| `Contos_1991.pdf` | Contos DA et al., Nonlinear elimination of methyprylon (n…, Journal of pharmaceutical s… (1991) | popPK | 6 | [10.1002/jps.2600800813](https://doi.org/10.1002/jps.2600800813) | [1686463](https://pubmed.ncbi.nlm.nih.gov/1686463) | Single overdosed patient case report with half-lives (4.4 h parent, 8 h metabolite) reported in text, but no CL/V or compartmental model parameters. |

<sub>queue written 2026-10-06 21:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_1973 | irrelevant | 3 | 2 | This is a hemoperfusion/dialysis clearance study in intoxicated patients, not a disposition PK study; no numeric clearance values for methyprylon appear in the evidence. |
| popPK | Chang_1973_2 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Koffler_1978 | irrelevant | 2 | 1 | Methyprylon is only one of several overdose drugs treated with hemoperfusion; no quantitative PK parameters for methyprylon are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyprylon%5D&body=Drug%3A%20methyprylon%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methyprylon/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 21:41 UTC</sub>
