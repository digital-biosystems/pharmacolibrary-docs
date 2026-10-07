<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artenimol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artenimol_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/Artenimol_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# artenimol

- **generic name:** artenimol
- **ATC codes:** `P01BE05`, `P01BF05`
- **DrugBank:** [DB11638](https://go.drugbank.com/drugs/DB11638) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Artenimol (dihydroartemisinin) is an antimalarial medicine used to treat malaria. It is used both alone and in combination with other antimalarials, and is approved in some regions while still being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5276420](https://www.wikidata.org/wiki/Q5276420) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| artenimol (dihydroartemisinin) | parent | 284.352 | C15H24O5 | PubChem | [3000518](https://pubchem.ncbi.nlm.nih.gov/compound/3000518) | Chotsiri_2017, Kang_2024 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Kang_2024 |
| dihydroartemisinin (artenimol) | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Chotsiri_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:37 | 2:32 | 1/1/1 | 0/0/0 | 0/0/0 | 84,679/12,372 | ollama / glm-5.3-flash | 8 | 0/4 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2024_reference](drugs/drug_artenimol/Artenimol_Ding2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kang_2024_reference](drugs/drug_artenimol/Artenimol_Kang2024_reference.md) | — | parent + metabolite (no model) | 10 | Kang DW et al., Inter-Species Pharmacokinetic Modeling…, International journal of mo… (2024) | [10.3390/ijms25136998](https://doi.org/10.3390/ijms25136998) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chotsiri_2017_reference](drugs/drug_artenimol/Artenimol_Chotsiri2017_reference.md) | — | 1-compartment (no model) | 0 | Chotsiri P et al., Population pharmacokinetics and electro…, British journal of clinical… (2017) | [10.1111/bcp.13372](https://doi.org/10.1111/bcp.13372) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=artenimol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` target | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2D6` inhibitor, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACTG1 (target), ALDH7A1 (target), ALDOA (target), ANXA2 (target), ATP5F1A (target), ATP5MG (target), ATP5PO (target), CAST (target), CCT3 (target), CFL1 (target), CLIC1 (target), CSRP1 (target), CYCS (target), DDX39B (target), DDX5 (target), DPYSL2 (target), DSP (target), EEF1A1 (target), ENO1 (target), FLNA (target), FTO (target), G6PD (target), GAPDH (target), GAPDHS (target), GPI (target), HNRNPA2B1 (target), HNRNPD (target), HNRNPK (target), HP1BP3 (target), HSPA8 (target), HSPB1 (target), IQGAP1 (target), KHSRP (target), LDHA (target), LDHB (target), LGALS1 (target), MAP4 (target), MDH1 (target), MYH9 (target), NPEPPS (target), NPM1 (target), P4HB (target), PFN1 (target), PGAM1 (target), PGK1 (target), PKM (target), PPIA (target), PRDX1 (target), RPL10 (target), RPL14 (target), RPL18 (target), RPL23A (target), RPL35 (target), RPL4 (target), RPS13 (target), RPS17 (target), RPS18 (target), RPS19 (target), RPS28 (target), RPS5 (target), RPS6 (target), RPS8 (target), RPS9 (target), SF1 (target), SFPQ (target), SHMT2 (target), SNRPD2 (target), SRP14 (target), SRSF4 (target), TAGLN (target), TAGLN2 (target), TPI1 (target), TPM1 (target), TUBA1A (target), TUBB (target), TUBB4A (target), TUBB6 (target), VIM (target), ZYX (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 263 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ding_2024 | irrelevant | 0 | 0 | The population PK models and parameters (CL/F, V/F, Q/F, ka) are for amodiaquine/desethylamodiaquine and piperaquine; dihydroartemisinin (artenimol) is only the co-administered artemisinin component and is not modeled. |
| popPK | Hoglund_2017 | irrelevant | 1 | 0 | This is a population-PK study of piperaquine; dihydroartemisinin (artenimol) is only the co-administered partner drug and no artenimol disposition parameters are reported. |
| popPK | Vanachayangkul_2017 | irrelevant | 0 | 0 | This is a population PK model of piperaquine, not artenimol; artenimol (dihydroartemisinin) is only part of the co-formulated therapy and no artenimol parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:35 UTC</sub>
