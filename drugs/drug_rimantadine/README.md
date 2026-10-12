<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;rimantadine&quot;}]"></div>

# rimantadine

- **generic name:** rimantadine
- **ATC codes:** `J05AC02`
- **DrugBank:** [DB00478](https://go.drugbank.com/drugs/DB00478) · **PubChem:** [CID 5071](https://pubchem.ncbi.nlm.nih.gov/compound/5071)
- **molar mass:** 179.3018 g/mol (C12H21N) — DrugBank
- **groups:** approved

## About

Rimantadine is an antiviral drug used to treat influenza A infection. It is an approved antiviral for systemic use, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q42171](https://www.wikidata.org/wiki/Q42171) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:01 | 0:39 | 0/0/0 | 1/0/0 | 0/0/0 | 44,434/1,443 | ollama / glm-5.3-flash | 4 | 2/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kobe_2026_MHV_infectivity_plaque_reduction_post_treatment](drugs/drug_rimantadine/pd_Kobe_2026_MHV_infectivity_plaque_reduction_post_treatment.md) | MHV infectivity (plaque reduction, post-treatment) ← rimantadine · direct sigmoid Emax (Hill) effect | — | Kobe N et al., In silico characterisation of a novel S…, Bioorganic chemistry (2026) | [10.1016/j.bioorg.2026.109949](https://doi.org/10.1016/j.bioorg.2026.109949) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rimantadine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 57 matched, 49 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brooks_2012 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study of arbidol; rimantadine appears only as a comparator EC50 value, with no PK parameters. |
| popPK | Burlington_1982 | irrelevant | 1 | 0 | In-vitro antiviral activity study in ferret tracheal organ cultures with no PK disposition parameters for rimantadine. |
| popPK | Dong_2025 | irrelevant | 0 | 0 | Medicinal chemistry study of new adamantane derivatives; rimantadine only mentioned as discontinued comparator, no PK parameters. |
| popPK | Hu_2017 | irrelevant | 0 | 0 | This is an antiviral efficacy study of a spiroadamantane analog, not rimantadine PK; no disposition parameters are reported. |
| popPK | Jacob_2016 | irrelevant | 0 | 0 | This is a virology study of amantadine resistance in H5N1 viruses with no pharmacokinetic parameters for rimantadine. |
| popPK | Jefferson_2014 | irrelevant | 0 | 0 | This is a Cochrane efficacy review of neuraminidase inhibitors (oseltamivir, zanamivir) with no rimantadine PK parameters reported. |
| popPK | Kamal_2015 | irrelevant | 0 | 0 | This is an oseltamivir drug-disease model; rimantadine is not the subject drug and no rimantadine PK parameters appear. |
| popPK | Kang_2015 | irrelevant | 0 | 0 | Chemistry/antiviral activity study; rimantadine only appears as a comparator with EC50 values, no PK parameters. |
| popPK | Kobe_2026 | irrelevant | 0 | 0 | In vitro antiviral/drug-discovery study of SARS-CoV-2 E protein inhibitors; rimantadine is only a comparator with EC50/CC50 values, no PK disposition parameters. |
| popPK | Korshin_2013 | irrelevant | 0 | 0 | Rimantadine is only a potency comparator; no PK parameters reported. |
| popPK | Leneva_2000 | irrelevant | 0 | 0 | This is an efficacy study of oseltamivir in mice; rimantadine is only a co-administered comparator with no PK parameters reported. |
| popPK | Risner_2020 | irrelevant | 0 | 0 | Rimantadine is only one of many screened compounds in an in-vitro SARS-CoV-2 antiviral assay; no PK disposition parameters for rimantadine are reported. |
| popPK | Savinova_2009 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study with EC50 values only; no PK disposition parameters for rimantadine. |
| popPK | Smee_2002 | irrelevant | 0 | 0 | In vitro antiviral assay methods study; rimantadine only tested for EC50/IC50 cytotoxicity, no PK parameters. |
| popPK | Sugaya_2012 | irrelevant | 0 | 0 | This is a population PK study of peramivir, not rimantadine; no rimantadine parameters are reported. |
| popPK | Thomaston_2021 | irrelevant | 0 | 0 | Structural/biophysical study of rimantadine binding to the M2 channel; no pharmacokinetic disposition parameters reported. |
| popPK | Wagaman_2002 | irrelevant | 0 | 0 | This is an in vitro antiviral assay development paper; rimantadine appears only as an EC50 comparator, with no PK parameters. |
| popPK | Zarubaev_2015 | irrelevant | 0 | 0 | Rimantadine is only mentioned as a comparator for resistance testing; no PK parameters for it are reported. |
| popPK | Zhan_2012 | irrelevant | 0 | 0 | Medicinal chemistry/antiviral activity study; rimantadine only appears as a comparator, with no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
