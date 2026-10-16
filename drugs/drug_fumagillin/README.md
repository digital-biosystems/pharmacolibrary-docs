<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;fumagillin&quot;}]"></div>

# fumagillin

- **generic name:** fumagillin
- **ATC codes:** `P01AX10`
- **DrugBank:** [DB02640](https://go.drugbank.com/drugs/DB02640) · **PubChem:** [CID 6917655](https://pubchem.ncbi.nlm.nih.gov/compound/6917655)
- **molar mass:** 458.551 g/mol (C26H34O7) — DrugBank
- **groups:** experimental

## About

Fumagillin is an antibiotic-like compound with antiprotozoal and angiogenesis-inhibiting activity, studied against protozoal infections. It is not an established marketed medicine; DrugBank classifies it as experimental, so its use remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q120199](https://www.wikidata.org/wiki/Q120199) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fumagillin | parent | 458.551 | C26H34O7 | DrugBank | [6917655](https://pubchem.ncbi.nlm.nih.gov/compound/6917655) | Laurén_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:37 | 0:43 | 0/1/0 | 1/0/1 | 0/0/0 | 17,301/1,637 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Laurén_1989_reference](drugs/drug_fumagillin/Fumagillin_Laurn1989_reference.md) | — | 1-compartment (no model) | 3 | Laurén DJ et al., Toxicity and pharmacokinetics of the an…, Toxicology and applied phar… (1989) | [10.1016/0041-008x(89)90173-7](https://doi.org/10.1016/0041-008x(89)90173-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Park_2014_EC50](drugs/drug_fumagillin/pd_Park_2014_EC50.md) | parasite killing of Azumiobodo hoyamushi (24-h EC50) ← fumagillin · inhibition effect | — | Park KH et al., In vitro and in vivo efficacy of drugs…, Journal of fish diseases (2014) | [10.1111/jfd.12104](https://doi.org/10.1111/jfd.12104) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Dupuy_2006_Rho_123](drugs/drug_fumagillin/pd_Dupuy_2006_Rho_123.md) | intracellular rhodamine 123 accumulation (% of VSP) ← fumagillin · direct sigmoid Emax (Hill) effect | — | Dupuy J et al., Fumagillin, a new P-glycoprotein-interf…, Journal of veterinary pharm… (2006) | [10.1111/j.1365-2885.2006.00780.x](https://doi.org/10.1111/j.1365-2885.2006.00780.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fumagillin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: METAP2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Laurén_1989.pdf` | Laurén DJ et al., Toxicity and pharmacokinetics of the an…, Toxicology and applied phar… (1989) | popPK | 8 | [10.1016/0041-008x(89)90173-7](https://doi.org/10.1016/0041-008x(89)90173-7) | [2718173](https://pubmed.ncbi.nlm.nih.gov/2718173) | Two-compartment PK in trout with alpha/beta half-lives reported in the abstract, but full microconstants (CL, V) are not given numerically. |
| `Dupuy_2006.pdf` | Dupuy J et al., Fumagillin, a new P-glycoprotein-interf…, Journal of veterinary pharm… (2006) | pd | 4 | [10.1111/j.1365-2885.2006.00780.x](https://doi.org/10.1111/j.1365-2885.2006.00780.x) | [17083452](https://www.ncbi.nlm.nih.gov/pubmed/17083452) | metadata signals extractable PD data (EC50) |
| `Park_2014.pdf` | Park KH et al., In vitro and in vivo efficacy of drugs…, Journal of fish diseases (2014) | pd | 4 | [10.1111/jfd.12104](https://doi.org/10.1111/jfd.12104) | [23952334](https://www.ncbi.nlm.nih.gov/pubmed/23952334) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T05:37:34.066830+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arico-Muendel_2013 | not_relevant | 0 | 0 | Paper describes PPI-2458 metabolism and MetAP2 inhibition but reports no gene variant/genotype effects on PK or PD parameters. |
| popPK | Dupuy_2006 | irrelevant | 0 | 0 | Fumagillin is only a P-gp-interfering co-agent studied in vitro; no PK disposition parameters for fumagillin itself are reported. |
| popPK | Park_2014 | irrelevant | 0 | 0 | Fumagillin is only one of many drugs screened for antiparasitic EC50 efficacy; no pharmacokinetic disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:37 UTC</sub>
