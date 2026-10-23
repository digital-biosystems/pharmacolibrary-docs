<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;bentazepam&quot;}]"></div>

# bentazepam

- **generic name:** bentazepam
- **ATC codes:** `N05BA24`
- **DrugBank:** [DB14719](https://go.drugbank.com/drugs/DB14719) · **PubChem:** not captured
- **molar mass:** 296.39 g/mol (C17H16N2OS) — DrugBank
- **groups:** experimental

## About

Bentazepam is a benzodiazepine-derivative anxiolytic, sedative and hypnotic that has been used to treat anxiety and sleep problems. It is considered an experimental drug and is not in routine clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1421936](https://www.wikidata.org/wiki/Q1421936) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bentazepam | parent | 296.39 | C17H16N2OS | DrugBank | — | Colino_1991, Fernandez_1988, Mariño_1987 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V | 153.9 ‡ | L | 2.198 l/kg | patients receiving multiple oral doses of bentazepam | 9 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fernandez_1988_reference](drugs/drug_bentazepam/Bentazepam_Fernandez1988_reference.md) |
| V | V1 | 143.4 ‡ | L | 2.049 l/kg | patients receiving multiple oral doses of bentazepam | 9 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fernandez_1988_reference](drugs/drug_bentazepam/Bentazepam_Fernandez1988_reference.md) |
| ka | kabs | 2.024 | 1/h | 2.024 h-1 | patients receiving multiple oral doses of bentazepam | 9 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fernandez_1988_reference](drugs/drug_bentazepam/Bentazepam_Fernandez1988_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Fernandez_1988 · V ·/kg</text><circle cx="255.5" cy="30.0" r="4" fill="#ef6c00"><title>Fernandez_1988 · V ·/kg: 153.9 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Fernandez_1988 · V1 ·/kg</text><circle cx="244.8" cy="46.0" r="4" fill="#ef6c00"><title>Fernandez_1988 · V1 ·/kg: 143.4 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: F, Cl, Tlag, k12, k21 left at base-class defaults</sub> | [Fernandez_1988_reference](drugs/drug_bentazepam/Bentazepam_Fernandez1988_reference.md) | held back | 2-compartment, oral | 6 | Fernandez Lastra C et al., Discrimination of kinetic models in het…, International journal of cl… (1988) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Colino_1991_reference](drugs/drug_bentazepam/Bentazepam_Colino1991_reference.md) | — | 1-compartment (no model) | 4 | Colino CI et al., Open-loop feedback control of serum ben…, International journal of cl… (1991) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Mariño_1987_reference](drugs/drug_bentazepam/Bentazepam_Mario1987_reference.md) | — | 1-compartment (no model) | 3 | Mariño EL et al., Simulation of plasma bentazepam levels…, International journal of cl… (1987) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mariño_1987_2_reference](drugs/drug_bentazepam/Bentazepam_Mario19872_reference.md) | — | 1-compartment (no model) | 0 | Mariño EL et al., Parametrization by non-linear regressio…, International journal of cl… (1987) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:19 | 0:48 | 0/3/1 | 0/0/0 | 0/0/0 | 30,621/2,075 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Colino_1991.pdf` | Colino CI et al., Open-loop feedback control of serum ben…, International journal of cl… (1991) | popPK | 10 | not captured | [1800395](https://pubmed.ncbi.nlm.nih.gov/1800395) | Population PK parameters (Ka, Vd, Ke, half-life) for bentazepam are reported numerically in the abstract. |
| `Fernandez_1988.pdf` | Fernandez Lastra C et al., Discrimination of kinetic models in het…, International journal of cl… (1988) | popPK | 10 | not captured | [3209281](https://pubmed.ncbi.nlm.nih.gov/3209281) | Population/compartmental PK parameters for bentazepam (Ka, Vd, Ke, K12, K21) are reported numerically in the abstract for 9 human patients. |
| `Mariño_1987_2.pdf` | Mariño EL et al., Parametrization by non-linear regressio…, International journal of cl… (1987) | popPK | 10 | not captured | [3429066](https://pubmed.ncbi.nlm.nih.gov/3429066) | Human PK study of bentazepam with numeric ka, kel, and Vd values reported directly in the abstract. |
| `Mariño_1987.pdf` | Mariño EL et al., Simulation of plasma bentazepam levels…, International journal of cl… (1987) | popPK | 9 | not captured | [2893777](https://pubmed.ncbi.nlm.nih.gov/2893777) | Population-style PK parameters (ka, kel, Vd) for bentazepam from patient data are reported numerically in the abstract itself. |

<sub>queue written 2026-10-06T18:18:37.055773+00:00</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 18:18 UTC</sub>
