<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;halofantrine&quot;}]"></div>

# halofantrine

- **generic name:** halofantrine
- **ATC codes:** `P01BX01`
- **DrugBank:** [DB01218](https://go.drugbank.com/drugs/DB01218) · **PubChem:** [CID 37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393)
- **molar mass:** 500.424 g/mol (C26H30Cl2F3NO) — DrugBank
- **groups:** approved, withdrawn

## About

Halofantrine is an antimalarial drug used to treat malaria caused by Plasmodium falciparum and Plasmodium vivax. It is no longer in general use, having been withdrawn, largely because of safety concerns about heart rhythm disturbances.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q947595](https://www.wikidata.org/wiki/Q947595) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| halofantrine | parent | 500.424 | C26H30Cl2F3NO | DrugBank | [37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393) | Klein_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:44 | 0:31 | 0/2/0 | 1/0/0 | 0/0/0 | 35,044/2,095 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Klein_2012_reference](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md) | — | 2-compartment (no model) | 3 | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Krishna_1993_reference](drugs/drug_halofantrine/Halofantrine_Krishna1993_reference.md) | — | 1-compartment (no model) | 0 | Krishna S et al., Pharmacokinetics, efficacy and toxicity…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb00419.x](https://doi.org/10.1111/j.1365-2125.1993.tb00419.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kinoshita_2010_QaTc](drugs/drug_halofantrine/pd_Kinoshita_2010_QaTc.md) | change in QaTc interval ← halofantrine · direct sigmoid Emax (Hill) effect | — | Kinoshita A et al., Effects of anti-malarial drugs on the e…, Malaria journal (2010) | [10.1186/1475-2875-9-318](https://doi.org/10.1186/1475-2875-9-318) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=halofantrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (modulator), CALM2 (modulator), CALM3 (modulator), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klein_2012.pdf` | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | popPK | 10 | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) | [23058047](https://pubmed.ncbi.nlm.nih.gov/23058047) | The paper reports a population pharmacokinetic model for halofantrine in humans with all quantitative parameters (CL, V1, CLD, V2) explicitly listed in the abstract and key findings. |

<sub>queue written 2026-10-14T23:44:04.149109+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kinoshita_2010 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation using an isolated guinea pig heart model to measure QT interval prolongation, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | The paper reports in vitro susceptibility (EC50) of Plasmodium falciparum to halofantrine, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:44 UTC</sub>
