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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:13 | 0:24 | 0/3/1 | 0/0/0 | 0/0/0 | 28,399/1,997 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: F, Cl, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Fernandez_1988_reference](drugs/drug_bentazepam/Bentazepam_Fernandez1988_reference.md) | held back | 2-compartment, oral | 6 | Fernandez Lastra C et al., Discrimination of kinetic models in het…, International journal of cl… (1988) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Colino_1991_reference](drugs/drug_bentazepam/Bentazepam_Colino1991_reference.md) | — | 1-compartment (no model) | 4 | Colino CI et al., Open-loop feedback control of serum ben…, International journal of cl… (1991) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mariño_1987_reference](drugs/drug_bentazepam/Bentazepam_Mario1987_reference.md) | — | 1-compartment (no model) | 2 | Mariño EL et al., Simulation of plasma bentazepam levels…, International journal of cl… (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mariño_1987_2_reference](drugs/drug_bentazepam/Bentazepam_Mario19872_reference.md) | — | 1-compartment (no model) | 0 | Mariño EL et al., Parametrization by non-linear regressio…, International journal of cl… (1987) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bentazepam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), GABRG3 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Colino_1991.pdf` | Colino CI et al., Open-loop feedback control of serum ben…, International journal of cl… (1991) | popPK | 10 | not captured | [1800395](https://pubmed.ncbi.nlm.nih.gov/1800395) | The paper reports population PK parameters for bentazepam in humans, but the values for Ka and Ke are unit-annotated as "l/h" (likely a typo for 1/h or h⁻¹), making direct numerical extraction of clearance rates ambiguous. |
| `Fernandez_1988.pdf` | Fernandez Lastra C et al., Discrimination of kinetic models in het…, International journal of cl… (1988) | popPK | 10 | not captured | [3209281](https://pubmed.ncbi.nlm.nih.gov/3209281) | The paper reports specific quantitative pharmacokinetic parameters (ka, Vd, Ke, etc.) for bentazepam in humans, with values clearly present in the text. |
| `Mariño_1987_2.pdf` | Mariño EL et al., Parametrization by non-linear regressio…, International journal of cl… (1987) | popPK | 10 | not captured | [3429066](https://pubmed.ncbi.nlm.nih.gov/3429066) | The paper reports quantitative pharmacokinetic parameters (ka, elimination constant, volume) for bentazepam in humans with specific numeric values provided in the text. |
| `Mariño_1987.pdf` | Mariño EL et al., Simulation of plasma bentazepam levels…, International journal of cl… (1987) | popPK | 9 | not captured | [2893777](https://pubmed.ncbi.nlm.nih.gov/2893777) | The paper reports specific quantitative pharmacokinetic parameters (ka, ke, Vd) for bentazepam in humans derived from a previous study within the same context. |

<sub>queue written 2026-10-14T22:12:47.818349+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:12 UTC</sub>
