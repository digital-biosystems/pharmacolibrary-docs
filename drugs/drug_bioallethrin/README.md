<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;bioallethrin&quot;}]"></div>

# bioallethrin

- **generic name:** bioallethrin
- **ATC codes:** `P03AC02`
- **DrugBank:** [DB13746](https://go.drugbank.com/drugs/DB13746) · **PubChem:** [CID 15558638](https://pubchem.ncbi.nlm.nih.gov/compound/15558638)
- **molar mass:** 302.414 g/mol (C19H26O3) — DrugBank
- **groups:** approved, withdrawn

## About

Bioallethrin is a synthetic pyrethroid insecticide used to kill ectoparasites such as lice. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2102184](https://www.wikidata.org/wiki/Q2102184) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:08 | 0:23 | 0/0/0 | 1/1/0 | 0/0/0 | 28,474/1,397 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [García_2017_growth_inhibition](drugs/drug_bioallethrin/pd_Garc_a_2017_growth_inhibition.md) | Growth inhibition of Pseudokirchneriella subcapitata ← bioallethrin (R/S-bioallethrin and esbiol) · direct sigmoid Emax (Hill) effect | — | García MÁ et al., A capillary micellar electrokinetic chr…, Journal of chromatography. A (2017) | [10.1016/j.chroma.2017.06.056](https://doi.org/10.1016/j.chroma.2017.06.056) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Cao_2011_Ca_2_i](drugs/drug_bioallethrin/pd_Cao_2011_Ca_2_i.md) | intracellular calcium concentration ← S-bioallethrin · direct Emax (saturable) effect | — | Cao Z et al., Mechanisms of pyrethroid insecticide-in…, The Journal of pharmacology… (2011) | [10.1124/jpet.110.171850](https://doi.org/10.1124/jpet.110.171850) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bioallethrin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1A (blocker), CACNA1C (blocker), CACNA1G (blocker), CACNG1 (target), SCN1A (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlbom_1994 | irrelevant | 0 | 0 | Toxicology/receptor-binding study with no PK disposition parameters for bioallethrin. |
| popPK | Cao_2011 | irrelevant | 0 | 0 | In-vitro mechanistic study of calcium influx in mouse neurons; no PK disposition parameters for bioallethrin. |
| popPK | García_2017 | irrelevant | 0 | 0 | This is an analytical chemistry/ecotoxicity study (CE separation method, EC50 in algae/plants) with no pharmacokinetic disposition parameters for bioallethrin. |
| popPK | Norris_2024 | irrelevant | 0 | 0 | Bioallethrin is only a toxicity comparator (LC50); no pharmacokinetic parameters are reported. |
| popPK | Wolansky_2006 | irrelevant | 0 | 0 | This is a pharmacodynamic dose-response (motor function) study in rats, not a PK study, and no disposition parameters for bioallethrin are reported. |
| popPK | Wolansky_2008 | irrelevant | 0 | 0 | This is a neurobehavioral toxicology review with no PK parameters for bioallethrin; no numeric disposition values appear. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
