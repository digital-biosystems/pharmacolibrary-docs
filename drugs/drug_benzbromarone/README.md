<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;benzbromarone&quot;}]"></div>

# benzbromarone

- **generic name:** benzbromarone
- **ATC codes:** `M04AB03`
- **DrugBank:** [DB12319](https://go.drugbank.com/drugs/DB12319) · **PubChem:** [CID 2333](https://pubchem.ncbi.nlm.nih.gov/compound/2333)
- **molar mass:** 424.083 g/mol (C17H12Br2O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Benzbromarone is a uricosuric medicine used to treat gout by helping the body excrete uric acid. It was withdrawn from some markets, reportedly over safety concerns including liver damage, though it remains available in a few countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410435](https://www.wikidata.org/wiki/Q410435) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:18 | 0:12 | 0/0/0 | 0/0/1 | 0/0/0 | 31,040/1,697 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Herington_2015_AUC](drugs/drug_benzbromarone/pd_Herington_2015_AUC.md) | myometrial AUC ← benzbromarone · direct sigmoid Emax (Hill) effect | — | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Herington_2015_Amplitude](drugs/drug_benzbromarone/pd_Herington_2015_Amplitude.md) | myometrial Amplitude ← benzbromarone · direct sigmoid Emax (Hill) effect | — | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Herington_2015_Ca2_release](drugs/drug_benzbromarone/pd_Herington_2015_Ca2_release.md) | OT-induced Ca2+-mobilization ← benzbromarone · direct sigmoid Emax (Hill) effect | — | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Herington_2015_Frequency](drugs/drug_benzbromarone/pd_Herington_2015_Frequency.md) | myometrial Frequency ← benzbromarone · direct sigmoid Emax (Hill) effect | — | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benzbromarone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` stimulator | DrugBank actor |
| distribution | lung | `ABCC1` stimulator | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ANO1 (target), SLC22A12 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2009 | irrelevant | 0 | 0 | The paper is a methodological statistics paper proposing a new test for bioequivalence, not a primary study reporting original pharmacokinetic parameter values for benzbromarone. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The paper focuses on the mechanistic pharmacology of benzbromarone on BK channels (in vitro/ex vivo) and does not report population pharmacokinetic parameters. |
| popPK | Herington_2015 | irrelevant | 0 | 0 | The paper is a high-throughput screening study on uterine contractility where benzbromarone is used only as a hit-compound in pharmacological assays, with no pharmacokinetic parameters reported. |
| popPK | Roch-Ramel_1997 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study reporting IC50 values for urate transport inhibition in membrane vesicles, not pharmacokinetic disposition parameters (CL, V, half-life, ka). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
