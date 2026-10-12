<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;latamoxef&quot;}]"></div>

# latamoxef

- **generic name:** latamoxef
- **ATC codes:** `J01DD06`
- **DrugBank:** [DB04570](https://go.drugbank.com/drugs/DB04570) · **PubChem:** [CID 47499](https://pubchem.ncbi.nlm.nih.gov/compound/47499)
- **molar mass:** 520.473 g/mol (C20H20N6O9S) — DrugBank
- **groups:** approved

## About

Latamoxef is an antibiotic of the cephalosporin class used to treat bacterial infections. It is an approved antibacterial, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3827439](https://www.wikidata.org/wiki/Q3827439) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| latamoxef | parent | 520.473 | C20H20N6O9S | DrugBank | [47499](https://pubchem.ncbi.nlm.nih.gov/compound/47499) | Tang_2021 |
| latamoxef R-epimer | metabolite | — (mass units only) | — | — | — | — |
| latamoxef S-epimer | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:32 | 2:13 | 0/1/1 | 0/0/0 | 0/0/0 | 121,380/3,072 | einfracz / qwen3.8-27b | 7 | 3/3 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q99 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Tang_2021_reference](drugs/drug_latamoxef/Latamoxef_Tang2021_reference.md) | — | 1-compartment (no model) | 3 | Tang BH et al., Drug Clearance in Neonates: A Combinati…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01033-x](https://doi.org/10.1007/s40262-021-01033-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.6). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2022_reference](drugs/drug_latamoxef/Latamoxef_Wang2022_reference.md) | — | general linear (no model) | 0 | Wang Y et al., Population Pharmacokinetics and Dosing…, Pharmaceutics (2022) | [10.3390/pharmaceutics14051033](https://doi.org/10.3390/pharmaceutics14051033) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Qi_2019.pdf` | Qi H et al., Population pharmacokinetics and dosing…, International journal of an… (2019) | popPK | 10 | [10.1016/j.ijantimicag.2018.11.017](https://doi.org/10.1016/j.ijantimicag.2018.11.017) | [30472290](https://pubmed.ncbi.nlm.nih.gov/30472290) | The paper describes a population PK study of latamoxef in neonates, but the abstract does not contain specific numeric parameter values (CL, V, etc.), which are likely in the full text or tables not provided. |
| `Aoyama_1985.pdf` | Aoyama H et al., [Transfer of latamoxef into human burn…, The Japanese journal of ant… (1985) | popPK | 9 | not captured | [4078995](https://pubmed.ncbi.nlm.nih.gov/4078995) | The paper reports quantitative pharmacokinetic analysis (two-compartment model parameters like Tmax, Cmax) for latamoxef in humans, with specific numeric values for serum and blister fluid concentrations provided in the abstract. |
| `Höffler_1984.pdf` | Höffler D et al., On the pharmacokinetics of latamoxef in…, Arzneimittel-Forschung (1984) | popPK | 9 | not captured | [6539614](https://pubmed.ncbi.nlm.nih.gov/6539614) | The study is a direct PK investigation of latamoxef in humans with a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided evidence text, only the model description and conclusions about renal impairment are present. |
| `Sato_1984.pdf` | Sato Y et al., [A comparison of the penetration charac…, The Japanese journal of ant… (1984) | popPK | 9 | not captured | [6471383](https://pubmed.ncbi.nlm.nih.gov/6471383) | The study reports a two-compartment PK model for latamoxef in humans, but specific parameter values (CL, V, ka) are not listed in the provided text, only concentration-time data and half-life for the comparator drug. |

<sub>queue written 2026-10-07T11:31:10.866976+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Höffler_1984 | relevant | 9 | 2 | The study is a direct PK investigation of latamoxef in humans with a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided evidence text, only the model description and conclusions about renal impairment are present. |
| popPK | Kitaura_1988 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding latamoxef or pharmacokinetics. |
| popPK | Kitaura_1989 | irrelevant | 0 | 0 | The provided text contains no scientific content or data regarding latamoxef pharmacokinetics. |
| popPK | Qi_2019 | relevant | 10 | 2 | The paper describes a population PK study of latamoxef in neonates, but the abstract does not contain specific numeric parameter values (CL, V, etc.), which are likely in the full text or tables not provided. |
| popPK | Qi_2021 | irrelevant | 2 | 0 | The paper is a study protocol for a clinical trial comparing dosing regimens and does not report original quantitative pharmacokinetic parameter values (such as specific clearance or volume constants), merely referencing a prior model (Qi et al., 2019). |
| popPK | Sato_1984 | relevant | 9 | 2 | The study reports a two-compartment PK model for latamoxef in humans, but specific parameter values (CL, V, ka) are not listed in the provided text, only concentration-time data and half-life for the comparator drug. |
| popPK | Tang_2024 | irrelevant | 2 | 0 | This is a machine learning decision support study that uses a previously published population pharmacokinetic model for simulation; the specific numeric PK parameter values (CL, V, etc.) for latamoxef are referenced in Supplementary Material S1 which is not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:31 UTC</sub>
