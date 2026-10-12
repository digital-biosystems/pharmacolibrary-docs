<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;alverine&quot;}]"></div>

# alverine

- **generic name:** alverine
- **ATC codes:** `A03AX08`
- **DrugBank:** [DB01616](https://go.drugbank.com/drugs/DB01616) · **PubChem:** [CID 3678](https://pubchem.ncbi.nlm.nih.gov/compound/3678)
- **molar mass:** 281.4351 g/mol (C20H27N) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Alverine is an antispasmodic drug used to relieve symptoms of functional gastrointestinal disorders such as irritable bowel syndrome. It remains in use, mainly for digestive complaints, and is available in several countries, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4116162](https://www.wikidata.org/wiki/Q4116162) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alverine | parent | 281.435 | C20H27N | DrugBank | [3678](https://pubchem.ncbi.nlm.nih.gov/compound/3678) | Cho_2026 |
| M1 | metabolite | 297.442 | C20H27NO | PubChem | [9926231](https://pubchem.ncbi.nlm.nih.gov/compound/9926231) | Cho_2026 |
| M2 | metabolite | — (mass units only) | — | — | — | — |
| M3 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:35 | 12:37 | 0/7/0 | 0/0/0 | 0/0/0 | 173,956/38,946 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.773). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Cho_2026_estimate](drugs/drug_alverine/Alverine_Cho2026_estimate.md) | — | general linear (no model) | 18 | Cho A et al., Development of Integrated Parent-Metabo…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cho_2026_m1](drugs/drug_alverine/Alverine_Cho2026_m1.md) | — | general linear (no model) | 0 | Cho A et al., Development of Integrated Parent-Metabo…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.273). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Cho_2026_m1_4_hydroxy_alverine](drugs/drug_alverine/Alverine_Cho2026_m1_4_hydroxy_alverine.md) | — | general linear (no model) | 4 | Cho A et al., Development of Integrated Parent-Metabo…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Cho_2026_m2_4_hydroxy_alverine_glucuronide](drugs/drug_alverine/Alverine_Cho2026_m2_4_hydroxy_alverine_glucuronide.md) | — | general linear (no model) | 6 | Cho A et al., Development of Integrated Parent-Metabo…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.273). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Cho_2026_m3_n_desethyl_alverine](drugs/drug_alverine/Alverine_Cho2026_m3_n_desethyl_alverine.md) | — | general linear (no model) | 4 | Cho A et al., Development of Integrated Parent-Metabo…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Cho_2026_parent_alverine](drugs/drug_alverine/Alverine_Cho2026_parent_alverine.md) | — | general linear (no model) | 5 | Cho A et al., Development of Integrated Parent-Metabo…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Cho_2026_po](drugs/drug_alverine/Alverine_Cho2026_po.md) | — | general linear (no model) | 5 | Cho A et al., Development of Integrated Parent-Metabo…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alverine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR1A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 7  ·  extracted 0  ·  needs_review 0  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | El_2026 | irrelevant | 0 | 0 | The study evaluates the antispasmodic activity of a seaweed extract using alverine only as a reference comparator in in-vitro and in-vivo pharmacological models, without reporting any pharmacokinetic parameters for alverine. |
| PD | El_2026 | not_relevant | 0 | 0 | The paper evaluates a seaweed extract (Cystoseira compressa) and only qualitatively compares its profile to alverine; it does not report any pharmacodynamic or exposure-response data for alverine itself. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on HNF4α agonists (NCT/NFT) for liver fat clearance, where alverine is only mentioned as a weak structural analog/comparator, and no pharmacokinetic parameters for alverine are reported. |
| popPK | Rizea-Savu_2020 | relevant | 9 | 2 | The study reports non-compartmental PK parameters (AUC, t1/2, etc.) for alverine and its metabolites in humans, but the specific numeric values are contained in Table 3 and Figure 1, which are not included in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 12:23 UTC</sub>
