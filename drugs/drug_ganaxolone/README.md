<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;ganaxolone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ganaxolone_Zolkowska2018_reference&quot;,&quot;label&quot;:&quot;Zolkowska_2018_mice&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganaxolone/Ganaxolone_Zolkowska2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ganaxolone

- **generic name:** ganaxolone
- **ATC codes:** `N03AX27`
- **DrugBank:** [DB05087](https://go.drugbank.com/drugs/DB05087) · **PubChem:** [CID 6918305](https://pubchem.ncbi.nlm.nih.gov/compound/6918305)
- **molar mass:** 332.528 g/mol (C22H36O2) — DrugBank
- **groups:** approved, investigational

## About

Ganaxolone is an antiepileptic medicine used to treat epileptic syndromes, including infantile spasms. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3758034](https://www.wikidata.org/wiki/Q3758034) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ganaxolone | parent | 332.528 | C22H36O2 | DrugBank | [6918305](https://pubchem.ncbi.nlm.nih.gov/compound/6918305) | Zolkowska_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:56 | 1:05 | 1/0/0 | 0/0/0 | 0/0/0 | 99,631/6,130 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zolkowska_2018_mice](drugs/drug_ganaxolone/Ganaxolone_Zolkowska2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Zolkowska D et al., Intramuscular allopregnanolone and gana…, Epilepsia 59 Suppl 2(Suppl… (2018) | [10.1111/epi.13999](https://doi.org/10.1111/epi.13999) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ganaxolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zolkowska_2018.pdf` | Zolkowska D et al., Intramuscular allopregnanolone and gana…, Epilepsia 59 Suppl 2(Suppl… (2018) | popPK | 10 | [10.1111/epi.13999](https://doi.org/10.1111/epi.13999) | [29453777](https://pubmed.ncbi.nlm.nih.gov/29453777) | The abstract explicitly reports quantitative two-compartment PK parameters (Vd, CL, t½, F) for ganaxolone in mice. |
| `Carter_1997.pdf` | Carter RB et al., Characterization of the anticonvulsant…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9067315](https://www.ncbi.nlm.nih.gov/pubmed/9067315) | metadata signals extractable PD data (IC50) |
| `Devenish_2021.pdf` | Devenish SO et al., The anticonvulsant zonisamide positivel…, Neuropharmacology (2021) | pd | 4 | [10.1016/j.neuropharm.2020.108371](https://doi.org/10.1016/j.neuropharm.2020.108371) | [33122032](https://www.ncbi.nlm.nih.gov/pubmed/33122032) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T06:55:14.122551+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carter_1997 | irrelevant | 0 | 0 | The paper reports pharmacodynamic (ED50/TD50) and receptor binding data, but contains no pharmacokinetic parameters (CL, V, t1/2, ka). |
| popPK | Devenish_2021 | irrelevant | 0 | 0 | The paper is an electrophysiological study of zonisamide's effect on glycine receptors; ganaxolone is only mentioned as a comparator agent and no pharmacokinetic parameters are reported. |
| PGx | Martins_2026 | not_relevant | 0 | 0 | The paper is a general review of the antiseizure medication pipeline and does not report specific pharmacogenomic data or PK/PD parameter changes for ganaxolone. |
| popPK | Nik_2017 | irrelevant | 0 | 0 | The paper describes an in vitro pharmacological assay for GABAAR modulation and does not report any pharmacokinetic parameters for ganaxolone. |
| PGx | Nipper_2019 | not_relevant | 4 | 10 | The study reports pharmacodynamic differences (anticonvulsant efficacy) between genotypes for ganaxolone but does not explicitly attribute the effect to a specific identified gene variant, lacking the specific genetic locus required for a pharmacogenomic classification. |
| popPK | Olson_2024 | irrelevant | 0 | 0 | The paper reports clinical efficacy (seizure frequency) and safety outcomes, but contains no pharmacokinetic parameters (e.g., clearance, volume) or PK model data. |
| popPK | Pinna_2014 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study evaluating the effects of ganaxolone on PTSD-like behaviors in mice, and it does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Tobiasz_2025 | not_relevant | 0 | 0 | The paper is a systematic review of clinical treatment outcomes and efficacy for PCDH19 epilepsy and does not report pharmacogenomic data on the pharmacokinetics or pharmacodynamics of ganaxolone. |
| PGx | Zimmern_2022 | not_relevant | 2 | 2 | The paper is a narrative review of genetic epilepsies and mentions ganaxolone efficacy in trials, but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:55 UTC</sub>
