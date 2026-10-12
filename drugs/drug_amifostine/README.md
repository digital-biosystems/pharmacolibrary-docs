<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;amifostine&quot;}]"></div>

# amifostine

- **generic name:** amifostine
- **ATC codes:** `V03AF05`
- **DrugBank:** [DB01143](https://go.drugbank.com/drugs/DB01143) · **PubChem:** [CID 2141](https://pubchem.ncbi.nlm.nih.gov/compound/2141)
- **molar mass:** 214.223 g/mol (C5H15N2O3PS) — DrugBank
- **groups:** approved

## About

Amifostine is a detoxifying agent used to protect healthy tissue from side effects of cancer chemotherapy or radiotherapy. It is an approved medicine, used mainly in oncology settings alongside antineoplastic treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q251698](https://www.wikidata.org/wiki/Q251698) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:20 | 0:37 | 0/0/0 | 0/1/0 | 0/0/0 | 60,959/1,218 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Marzatico_2000_OH_scavenging](drugs/drug_amifostine/pd_Marzatico_2000_OH_scavenging.md) | Scavenging of hydroxyl radicals (OH-) by amifostine ← amifostine (WR-2721) · inhibition effect | — | Marzatico F et al., In vitro antioxidant properties of amif…, Cancer chemotherapy and pha… (2000) | [10.1007/s002800050026](https://doi.org/10.1007/s002800050026) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amifostine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALPG (inducer), ALPL (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | This is an in vitro/in vivo radioprotection drug-screening study; amifostine is only a comparator and no PK parameters (CL, V, half-life with volume, or PK model) for amifostine are reported. |
| popPK | Juan_2005 | irrelevant | 2 | 2 | Amifostine is only a co-administered cytoprotective agent; the PK parameters reported (AUC, Cmax, TPP) are for paclitaxel, not amifostine, and no amifostine disposition values appear. |
| popPK | Marzatico_2000 | irrelevant | 0 | 0 | In vitro antioxidant activity study with no PK disposition parameters for amifostine. |
| popPK | Mertsch_1998 | irrelevant | 0 | 0 | In-vitro mechanistic study of cytoprotection in bovine endothelial cells with no PK disposition parameters for amifostine. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | This is a drug-screening/tissue-chip study of radioprotectants; amifostine (WR-1065) is only a comparator and no PK parameters for it are reported. |
| popPK | Verma_2014 | irrelevant | 0 | 0 | The PK parameters reported are for DRDE-07, an amifostine analog, not for amifostine itself; amifostine is only mentioned as the parent scaffold. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
