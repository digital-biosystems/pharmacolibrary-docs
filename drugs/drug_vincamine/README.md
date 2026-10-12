<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;vincamine&quot;}]"></div>

# vincamine

- **generic name:** vincamine
- **ATC codes:** `C04AX07`
- **DrugBank:** [DB13374](https://go.drugbank.com/drugs/DB13374) · **PubChem:** [CID 15376](https://pubchem.ncbi.nlm.nih.gov/compound/15376)
- **molar mass:** 354.45 g/mol (C21H26N2O3) — DrugBank
- **groups:** investigational

## About

Vincamine is a vasodilator alkaloid that has been used to widen blood vessels and lower blood pressure. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416225](https://www.wikidata.org/wiki/Q416225) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vincamine | parent | 354.45 | C21H26N2O3 | DrugBank | [15376](https://pubchem.ncbi.nlm.nih.gov/compound/15376) | Millart_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:31 | 1:57 | 0/1/0 | 0/0/0 | 0/0/0 | 25,792/4,408 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Millart_1983_reference](drugs/drug_vincamine/Vincamine_Millart1983_reference.md) | — | 1-compartment (no model) | 3 | Millart H et al., Pharmacokinetic study of two pharmaceut…, International journal of cl… (1983) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Juan_2005.pdf` | Juan YP et al., Measurement and pharmacokinetics of vin…, Journal of chromatography. A (2005) | popPK | 9 | [10.1016/j.chroma.2005.01.043](https://doi.org/10.1016/j.chroma.2005.01.043) | [16130744](https://pubmed.ncbi.nlm.nih.gov/16130744) | The study reports pharmacokinetic parameters for vincamine in rats using a compartmental model, but the specific numeric values are not present in the provided evidence. |
| `Millart_1983.pdf` | Millart H et al., Pharmacokinetic study of two pharmaceut…, International journal of cl… (1983) | popPK | 9 | not captured | [6654533](https://pubmed.ncbi.nlm.nih.gov/6654533) | The study reports quantitative pharmacokinetic parameters (Tmax, Cmax, AUC, half-life) for vincamine in humans, with values explicitly listed in the text. |
| `Siegers_1977.pdf` | Siegers CP et al., [Vincamine concentrations in plasma and…, Arzneimittel-Forschung (1977) | popPK | 9 | not captured | [578452](https://pubmed.ncbi.nlm.nih.gov/578452) | The study reports a two-compartment model and half-life for vincamine in humans, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |
| `Kaneko_1991.pdf` | Kaneko S et al., Effects of several cerebroprotective dr…, European journal of pharmac… (1991) | pd | 4 | [10.1016/0922-4106(91)90086-w](https://doi.org/10.1016/0922-4106(91)90086-w) | [1652446](https://www.ncbi.nlm.nih.gov/pubmed/1652446) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T20:29:27.341005+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Braun_2019 | irrelevant | 0 | 0 | The study investigates the behavioral and neuroprotective effects of vindeburnol (a vincamine derivative) in mice, not the pharmacokinetic parameters of vincamine itself. |
| popPK | Camón_1978 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| popPK | Juan_2005 | relevant | 9 | 0 | The study reports pharmacokinetic parameters for vincamine in rats using a compartmental model, but the specific numeric values are not present in the provided evidence. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PGx | Kong_2016 | not_relevant | 0 | 0 | The study investigates the in vitro CYP inhibition potential of vinpocetine (a vincamine derivative) but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Manda_2015 | irrelevant | 0 | 0 | The study focuses on vinpocetine (a derivative) and evaluates in-vitro enzyme inhibition (CYPs, P-gp) rather than reporting pharmacokinetic disposition parameters (CL, V, t1/2) for vincamine. |
| PD | Manda_2015 | not_relevant | 0 | 0 | The paper reports in vitro pharmacokinetic interaction parameters (IC50/EC50 for CYPs and P-gp) for vinpocetine, not a pharmacodynamic exposure-response or dose-response relationship for vincamine. |
| PGx | Manda_2015 | not_relevant | 0 | 0 | The study investigates the drug-drug interaction potential of vinpocetine (a derivative) on CYPs and P-gp, but does not report any pharmacogenomic effects (gene variants) on the PK/PD of vincamine. |
| popPK | Norwood_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antimalarial analogues of vincamine, reporting biological activity (EC50) rather than pharmacokinetic parameters. |
| popPK | Rognoni_1977 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Siegers_1977 | relevant | 9 | 4 | The study reports a two-compartment model and half-life for vincamine in humans, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |
| popPK | Vereczkey_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vinpocetine (a vincamine derivative), not vincamine itself. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of vincamine derivatives for diabetes treatment, reporting no pharmacokinetic parameters for vincamine itself. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a phytochemical study reporting the isolation and biological activity (vasorelaxant/cytotoxic) of vincamine analogs, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:29 UTC</sub>
