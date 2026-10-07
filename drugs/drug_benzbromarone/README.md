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

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=benzbromarone) page (add drugs there; the set becomes a link).

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
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
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
