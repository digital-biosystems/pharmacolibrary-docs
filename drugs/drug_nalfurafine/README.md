<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;nalfurafine&quot;}]"></div>

# nalfurafine

- **generic name:** nalfurafine
- **ATC codes:** `V03AX02`
- **DrugBank:** [DB13471](https://go.drugbank.com/drugs/DB13471) · **PubChem:** not captured
- **molar mass:** 476.573 g/mol (C28H32N2O5) — DrugBank
- **groups:** investigational

## About

Nalfurafine is an investigational drug that has been studied for the treatment of pruritus (itching) in patients with chronic kidney disease. It is not authorised in the European Union and remains investigational according to DrugBank.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6960874](https://www.wikidata.org/wiki/Q6960874) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:07 | 0:15 | 0/0/0 | 1/1/0 | 0/0/0 | 22,852/1,198 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Barnett_2020_BRET](drugs/drug_nalfurafine/pd_Barnett_2020_BRET.md) | BRET signal (Gβγ recruitment, normalized to maximum U50,488 response) ← nalfurafine · direct sigmoid Emax (Hill) effect | — | Barnett ME et al., Unique Pharmacological Properties of th…, Molecular pharmacology (2020) | [10.1124/mol.120.119404](https://doi.org/10.1124/mol.120.119404) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yamaguchi_2022_Ziec](drugs/drug_nalfurafine/pd_Yamaguchi_2022_Ziec.md) | κOR activation measured as change in impedance (ΔZiec) via CellKeyTM system ← nalfurafine · direct Emax (saturable) effect | — | Yamaguchi M et al., Evaluation of the Intracellular Signali…, Molecules (Basel, Switzerla… (2022) | [10.3390/molecules27207065](https://doi.org/10.3390/molecules27207065) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yamaguchi_2022_arrestin_recruitment](drugs/drug_nalfurafine/pd_Yamaguchi_2022_arrestin_recruitment.md) | β-arrestin recruitment to κORs via PathHunter® assay ← nalfurafine · direct Emax (saturable) effect | — | Yamaguchi M et al., Evaluation of the Intracellular Signali…, Molecules (Basel, Switzerla… (2022) | [10.3390/molecules27207065](https://doi.org/10.3390/molecules27207065) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yamaguchi_2022_cAMP](drugs/drug_nalfurafine/pd_Yamaguchi_2022_cAMP.md) | intracellular cAMP levels (G-protein-mediated signaling) via GloSensor® cAMP assay ← nalfurafine · direct Emax (saturable) effect | — | Yamaguchi M et al., Evaluation of the Intracellular Signali…, Molecules (Basel, Switzerla… (2022) | [10.3390/molecules27207065](https://doi.org/10.3390/molecules27207065) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnett_2020 | irrelevant | 0 | 0 | In vitro BRET signaling study of KOR pharmacology; nalfurafine is only a test ligand with potency values, no PK/disposition parameters. |
| popPK | Kumada_2017 | irrelevant | 0 | 0 | This is an efficacy/safety clinical trial with no pharmacokinetic parameters reported for nalfurafine. |
| popPK | Yamaguchi_2022 | irrelevant | 0 | 0 | In vitro cell-signaling study of κOR agonist potency (EC50/bias factors), with no pharmacokinetic disposition parameters for nalfurafine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
