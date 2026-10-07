<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexamfetamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexamfetamine_Roberts2015_final_final_plasma_model&quot;,&quot;label&quot;:&quot;Roberts_2015_final_final_plasma_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dexamfetamine

- **generic name:** dexamfetamine
- **ATC codes:** `N06BA02`
- **DrugBank:** [DB01576](https://go.drugbank.com/drugs/DB01576) · **PubChem:** not captured
- **groups:** approved, illicit, investigational

## About

Dexamfetamine is a stimulant medicine used to treat attention deficit hyperactivity disorder and narcolepsy. It is an approved drug used widely for these conditions, though it is a controlled stimulant carrying a boxed warning and is also used illicitly.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1706418](https://www.wikidata.org/wiki/Q1706418) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dexamfetamine (dextroamphetamine) | parent | 135.21 | C9H13N | PubChem | [5826](https://pubchem.ncbi.nlm.nih.gov/compound/5826) | Roberts_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:26 | 1:16 | 1/1/0 | 0/1/0 | 0/0/0 | 84,314/4,170 | ollama / glm-5.3-flash | 4 | 0/4 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Roberts_2015_final_final_plasma_model](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md) | ▶ model + simulator | 1-compartment, oral | 4 | Roberts JK et al., A Population Pharmacokinetic Analysis o…, Clinical drug investigation (2015) | [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Roberts_2015_final](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final.md) | — | 2-compartment (no model) | 5 | Roberts JK et al., A Population Pharmacokinetic Analysis o…, Clinical drug investigation (2015) | [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2019_DA](drugs/drug_dexamfetamine/pd_van_2019_DA.md) | extracellular striatal dopamine biomarker turnover ← d-amphetamine (brain extracellular fluid) | — | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexamfetamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (inducer), ADRA1A (inhibitor), ADRA1B (target), SLC18A2 (inducer), SLC6A2 (negative modulator), SLC6A3 (negative modulator), SLC6A3 (unknown), TAAR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_2019.pdf` | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | popPK | 8 | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) | [30733244](https://pubmed.ncbi.nlm.nih.gov/30733244) | Population PK of dexamfetamine in plasma/brain ECF is the subject, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-07T00:25:49.507735+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aljabasini_2025 | irrelevant | 0 | 0 | This is a zebrafish toxicity study of MDPV; dextroamphetamine is only a reference compound for PPI validation, and no PK disposition parameters (CL, V, ka, half-life) for dexamfetamine are reported. |
| popPK | Aumann_2025 | irrelevant | 0 | 0 | PET/behavioral study using dexamfetamine as a pharmacological challenge probe; no PK parameters (CL, V, ka, half-life) reported. |
| popPK | Fudala_1990 | irrelevant | 0 | 0 | Behavioral conditioning study in rats with no pharmacokinetic parameters reported. |
| popPK | McElroy_2015 | irrelevant | 0 | 0 | Efficacy/safety trial of lisdexamfetamine with no PK parameters reported. |
| popPK | Overholtzer_2026 | irrelevant | 0 | 0 | This is a neuroimaging study of ADHD medication effects on brain structure, with no pharmacokinetic parameters for dexamfetamine reported. |
| popPK | van_2019 | relevant | 8 | 2 | Population PK of dexamfetamine in plasma/brain ECF is the subject, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:25 UTC</sub>
