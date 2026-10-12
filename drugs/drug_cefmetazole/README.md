<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefmetazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefmetazole_Kusumoto2023_reference&quot;,&quot;label&quot;:&quot;Kusumoto_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefmetazole/Cefmetazole_Kusumoto2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefmetazole

- **generic name:** cefmetazole
- **ATC codes:** `J01DC09`
- **DrugBank:** [DB00274](https://go.drugbank.com/drugs/DB00274) · **PubChem:** [CID 42008](https://pubchem.ncbi.nlm.nih.gov/compound/42008)
- **molar mass:** 471.534 g/mol (C15H17N7O5S3) — DrugBank
- **groups:** approved, investigational

## About

Cefmetazole is a second-generation cephalosporin antibiotic used to treat bacterial infections. It is not authorised in the European Union and is used only in a limited number of countries, mainly Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057238](https://www.wikidata.org/wiki/Q5057238) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefmetazole | parent | 471.534 | C15H17N7O5S3 | DrugBank | [42008](https://pubchem.ncbi.nlm.nih.gov/compound/42008) | García-Agundez_1992, Tomizawa_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:11 | 4:21 | 1/2/1 | 0/0/0 | 0/0/0 | 104,333/29,645 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Kusumoto_2023_reference](drugs/drug_cefmetazole/Cefmetazole_Kusumoto2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kusumoto M et al., Pharmacokinetic-pharmacodynamic analysi…, Frontiers in veterinary sci… (2023) | [10.3389/fvets.2023.1270137](https://doi.org/10.3389/fvets.2023.1270137) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [García-Agundez_1992_reference](drugs/drug_cefmetazole/Cefmetazole_GarcaAgundez1992_reference.md) | — | 1-compartment (no model) | 3 | García-Agundez MJ et al., Pharmacokinetic parameters from data re…, European journal of drug me… (1992) | [10.1007/BF03190141](https://doi.org/10.1007/BF03190141) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hamada_2022_reference](drugs/drug_cefmetazole/Cefmetazole_Hamada2022_reference.md) | — | 1-compartment (no model) | 0 | Hamada Y et al., Pharmacokinetic/Pharmacodynamic Analysi…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11040456](https://doi.org/10.3390/antibiotics11040456) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tomizawa_2017_reference](drugs/drug_cefmetazole/Cefmetazole_Tomizawa2017_reference.md) | — | 1-compartment (no model) | 0 | Tomizawa A et al., Optimal dosage of cefmetazole for intra…, Journal of pharmaceutical h… (2017) | [10.1186/s40780-016-0071-6](https://doi.org/10.1186/s40780-016-0071-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefmetazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Komatsu_2022.pdf` | Komatsu T et al., Timing of re-dosing based on population…, Journal of infection and ch… (2022) | popPK | 10 | [10.1016/j.jiac.2022.03.024](https://doi.org/10.1016/j.jiac.2022.03.024) | [35400549](https://pubmed.ncbi.nlm.nih.gov/35400549) | The paper describes a population PK study for cefmetazole in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not provided in the extracted evidence, likely residing in the full text or tables not included. |
| `Rodriguez-Barbero_1985.pdf` | Rodriguez-Barbero J et al., Pharmacokinetics of cefmetazole adminis…, Antimicrobial agents and ch… (1985) | popPK | 10 | [10.1128/AAC.28.4.544](https://doi.org/10.1128/AAC.28.4.544) | [3865631](https://pubmed.ncbi.nlm.nih.gov/3865631) | Study reports quantitative PK parameters for cefmetazole in humans, including plasma clearance range (3.8-12.5 L/h), half-life (~1.3 h), and Cmax, though specific individual compartmental values (V, Q, ka) are summarized rather than tabulated for every subject. |
| `Ohkawa_1980.pdf` | Ohkawa M et al., Pharmacokinetics of cefmetazole in norm…, Antimicrobial agents and ch… (1980) | popPK | 9 | [10.1128/AAC.18.3.386](https://doi.org/10.1128/AAC.18.3.386) | [6932824](https://pubmed.ncbi.nlm.nih.gov/6932824) | The study is a PK study of cefmetazole in humans, but the abstract only reports half-life and urinary excretion percentage, lacking explicit numerical values for clearance, volume, or rate constants required for full parameter extraction. |
| `García-Agundez_1992.pdf` | García-Agundez MJ et al., Pharmacokinetic parameters from data re…, European journal of drug me… (1992) | popPK | 8 | [10.1007/BF03190141](https://doi.org/10.1007/BF03190141) | [1490484](https://pubmed.ncbi.nlm.nih.gov/1490484) | The study reports specific pharmacokinetic parameters (half-life, biliary/urinary excretion constants, cumulative biliary excretion percentage) for cefmetazole in rats. |
| `Ko_1989.pdf` | Ko H et al., Pharmacokinetics of single-dose cefmeta…, Antimicrobial agents and ch… (1989) | popPK | 7 | [10.1128/AAC.33.4.508](https://doi.org/10.1128/AAC.33.4.508) | [2729944](https://pubmed.ncbi.nlm.nih.gov/2729944) | The study is a quantitative PK study of cefmetazole in humans, but the specific numeric values for clearance, volume, and half-life are described qualitatively (e.g., "did not change") without the actual means or standard deviations provided in the evidence text. |

<sub>queue written 2026-10-07T11:07:32.635639+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ko_1989 | relevant | 7 | 0 | The study is a quantitative PK study of cefmetazole in humans, but the specific numeric values for clearance, volume, and half-life are described qualitatively (e.g., "did not change") without the actual means or standard deviations provided in the evidence text. |
| popPK | Komatsu_2022 | relevant | 10 | 2 | The paper describes a population PK study for cefmetazole in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not provided in the extracted evidence, likely residing in the full text or tables not included. |
| popPK | Murakawa_1980 | irrelevant | 0 | 0 | The study investigates ceftizoxime, with cefmetazole used only as a reference/comparator drug without specific PK parameter values reported for cefmetazole itself. |
| popPK | Ohkawa_1980 | relevant | 9 | 3 | The study is a PK study of cefmetazole in humans, but the abstract only reports half-life and urinary excretion percentage, lacking explicit numerical values for clearance, volume, or rate constants required for full parameter extraction. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:07 UTC</sub>
