<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;clevudine&quot;}]"></div>

# clevudine

- **generic name:** clevudine
- **ATC codes:** `J05AF12`
- **DrugBank:** [DB06683](https://go.drugbank.com/drugs/DB06683) · **PubChem:** not captured
- **molar mass:** 260.221 g/mol (C10H13FN2O5) — DrugBank
- **groups:** investigational

## About

Clevudine is an antiviral drug investigated for the treatment of hepatitis B. It remains an investigational agent and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1100864](https://www.wikidata.org/wiki/Q1100864) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:25 | 0:18 | 0/0/0 | 0/1/0 | 0/0/0 | 34,061/1,099 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abdelhamed_2003_CCC_DNA](drugs/drug_clevudine/pd_Abdelhamed_2003_CCC_DNA.md) | nuclear HBV covalently closed circular (CCC) DNA ← clevudine · direct sigmoid Emax (Hill) effect | — | Abdelhamed AM et al., Comparison of anti-hepatitis B virus ac…, Antimicrobial agents and ch… (2003) | [10.1128/AAC.47.1.324-336.2003](https://doi.org/10.1128/AAC.47.1.324-336.2003) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abdelhamed_2003_extracellular_DNA](drugs/drug_clevudine/pd_Abdelhamed_2003_extracellular_DNA.md) | extracellular HBV DNA ← clevudine · direct sigmoid Emax (Hill) effect | — | Abdelhamed AM et al., Comparison of anti-hepatitis B virus ac…, Antimicrobial agents and ch… (2003) | [10.1128/AAC.47.1.324-336.2003](https://doi.org/10.1128/AAC.47.1.324-336.2003) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abdelhamed_2003_nuclear_RC_DNA](drugs/drug_clevudine/pd_Abdelhamed_2003_nuclear_RC_DNA.md) | nuclear HBV relaxed circular DNA ← clevudine · direct sigmoid Emax (Hill) effect | — | Abdelhamed AM et al., Comparison of anti-hepatitis B virus ac…, Antimicrobial agents and ch… (2003) | [10.1128/AAC.47.1.324-336.2003](https://doi.org/10.1128/AAC.47.1.324-336.2003) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abdelhamed_2003_replicative_intermediate_DNA](drugs/drug_clevudine/pd_Abdelhamed_2003_replicative_intermediate_DNA.md) | cytoplasmic HBV replicative intermediate DNA ← clevudine · direct sigmoid Emax (Hill) effect | — | Abdelhamed AM et al., Comparison of anti-hepatitis B virus ac…, Antimicrobial agents and ch… (2003) | [10.1128/AAC.47.1.324-336.2003](https://doi.org/10.1128/AAC.47.1.324-336.2003) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelhamed_2003 | irrelevant | 0 | 0 | In vitro antiviral efficacy study (EC50) in HepG2 cells with no pharmacokinetic disposition parameters for clevudine. |
| popPK | Chu_1998 | irrelevant | 3 | 1 | Clevudine (L-FMAU) is the subject drug, but only qualitative statements (e.g., "respectable bioavailability in rats") appear with no numeric PK parameters in the evidence. |
| popPK | Ma_1996 | irrelevant | 0 | 0 | This is a structure-activity synthesis/antiviral potency study in vitro with no pharmacokinetic disposition parameters for clevudine (L-FMAU). |
| popPK | Ma_1997 | irrelevant | 0 | 0 | This is a chemistry/synthesis and in-vitro antiviral activity paper with no pharmacokinetic parameters for clevudine. |
| popPK | Squires_2020 | irrelevant | 2 | 1 | Clevudine is the prodrug backbone of ATI-2173; PK data (rat plasma/tissue levels, monkey hepatic extraction) are described only qualitatively or as "data not shown"/figures, with no numeric disposition parameters for clevudine itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
