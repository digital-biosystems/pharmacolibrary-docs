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

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Millart_1983_reference](drugs/drug_vincamine/Vincamine_Millart1983_reference.md) | — | 1-compartment (no model) | 3 | Millart H et al., Pharmacokinetic study of two pharmaceut…, International journal of cl… (1983) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:31 | 1:57 | 0/1/0 | 0/0/0 | 0/0/0 | 25,792/4,408 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 20:29 UTC</sub>
