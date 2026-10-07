<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;mirtazapine&quot;}]"></div>

# mirtazapine

- **generic name:** mirtazapine
- **ATC codes:** `N06AX11`
- **DrugBank:** [DB00370](https://go.drugbank.com/drugs/DB00370) · **PubChem:** [CID 4205](https://pubchem.ncbi.nlm.nih.gov/compound/4205)
- **molar mass:** 265.3529 g/mol (C17H19N3) — DrugBank
- **groups:** approved, investigational

## About

Mirtazapine is an antidepressant used for depression, and has also been used for anxiety, insomnia and related sleep and neurotic disorders. It is an approved medicine and is widely used in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421930](https://www.wikidata.org/wiki/Q421930) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mirtazapine | parent | 265.353 | C17H19N3 | DrugBank | [4205](https://pubchem.ncbi.nlm.nih.gov/compound/4205) | Yan_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:42 | 1:32 | 0/1/0 | 2/0/0 | 0/0/0 | 86,320/5,966 | ollama / glm-5.3-flash | 11 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Yan_2026_reference](drugs/drug_mirtazapine/Mirtazapine_Yan2026_reference.md) | — | 1-compartment (no model) | 4 | Yan H et al., Optimizing Mirtazapine Initial Dosing:…, Drug design, development an… (2026) | [10.2147/DDDT.S601238](https://doi.org/10.2147/DDDT.S601238) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Park_2023_5_HT3_current](drugs/drug_mirtazapine/pd_Park_2023_5_HT3_current.md) | 5-HT3 receptor current inhibition ← mirtazapine · direct sigmoid Emax (Hill) effect | — | Park YS et al., Atypical antidepressant mirtazapine inh…, Journal of pharmacological… (2023) | [10.1016/j.jphs.2022.12.002](https://doi.org/10.1016/j.jphs.2022.12.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Pawlyk_2006_5_HT2A](drugs/drug_mirtazapine/pd_Pawlyk_2006_5_HT2A.md) | functional antagonism at cloned human 5-HT2A receptor ← mirtazapine · direct Emax (saturable) effect | — | Pawlyk AC et al., Effects of the 5-HT2A antagonist mirtaz…, Brain research (2006) | [10.1016/j.brainres.2006.09.050](https://doi.org/10.1016/j.brainres.2006.09.050) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mirtazapine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor/substrate | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: 5HT3 serotonin receptor (target), ADRA1A (target), ADRA2A (target), HRH1 (target), HTR2A (target), HTR2C (target), OPRK1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grasmäder_2004.pdf` | Grasmäder K et al., Population pharmacokinetic analysis of…, European journal of clinica… (2004) | popPK | 10 | [10.1007/s00228-004-0737-0](https://doi.org/10.1007/s00228-004-0737-0) | [15289959](https://pubmed.ncbi.nlm.nih.gov/15289959) | Population PK (nonmem) of mirtazapine in 65 patients, but only a relative 26% clearance effect is given; full parameter values not in evidence. |

<sub>queue written 2026-10-06T23:41:00.524190+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blumenthal_2014 | irrelevant | 0 | 0 | This is an EHR weight-gain outcomes study with no pharmacokinetic parameters for mirtazapine. |
| popPK | Cardon-Dunbar_2017 | irrelevant | 0 | 0 | PK parameters are for pramipexole; mirtazapine is only a co-ingestant with no quantitative PK data. |
| popPK | Furukawa_2018 | irrelevant | 0 | 0 | This is an efficacy meta-analysis of antidepressant trials; no pharmacokinetic parameters for mirtazapine are reported. |
| popPK | Grasmäder_2004 | relevant | 10 | 3 | Population PK (nonmem) of mirtazapine in 65 patients, but only a relative 26% clearance effect is given; full parameter values not in evidence. |
| popPK | Munk_2011 | irrelevant | 3 | 2 | PET receptor-binding study of radiolabeled mirtazapine reporting distribution volumes/binding potentials in tables, not systemic disposition PK parameters (CL, V, ka); numeric values referenced in tables not fully present in evidence. |
| popPK | Nowakowska_1999 | irrelevant | 0 | 0 | Behavioral/pharmacodynamic study in rats with no PK parameters reported. |
| popPK | Park_2023 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor currents, no pharmacokinetic parameters for mirtazapine. |
| popPK | Pawlyk_2006 | irrelevant | 0 | 0 | Pharmacodynamic study of mirtazapine's thermoregulatory effects in rats; no PK disposition parameters reported. |
| popPK | Puzhko_2021 | irrelevant | 0 | 0 | This is a prescribing-pattern study with no pharmacokinetic parameters for mirtazapine; only prescribing odds ratios appear. |
| popPK | Schneier_2015 | irrelevant | 0 | 0 | Clinical efficacy trial of mirtazapine in PTSD with no pharmacokinetic parameters reported. |
| popPK | Ueno_2015 | irrelevant | 0 | 0 | Clinical dose-response trial with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:41 UTC</sub>
