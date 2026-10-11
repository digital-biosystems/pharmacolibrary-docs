<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;opium alkaloids with morphine&quot;}]"></div>

# opium alkaloids with morphine

- **generic name:** opium alkaloids with morphine
- **ATC codes:** `R05DA05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Opium alkaloids with morphine are used as cough suppressants in cough and cold preparations. They are classified under the ATC system for respiratory system use, mainly as non-combination cough remedies.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| morphine-6-glucuronide | metabolite | 461.467 | C23H27NO9 | PubChem | [5360621](https://pubchem.ncbi.nlm.nih.gov/compound/5360621) | Simons_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:01 | 3:04 | 1/1/0 | 0/0/0 | 0/0/0 | 43,536/4,082 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Simons_2023_reference](drugs/drug_opium_alkaloids_with_morphine/OpiumAlkaloidsWithMorphine_Simons2023_reference.md) | held back | 1-compartment, IV | 7 (+1 cov.) | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Säwe_1981_reference](drugs/drug_opium_alkaloids_with_morphine/OpiumAlkaloidsWithMorphine_Swe1981_reference.md) | — | 1-compartment (no model) | 0 | Säwe J et al., Morphine kinetics in cancer patients, Clinical pharmacology and t… (1981) | [10.1038/clpt.1981.214](https://doi.org/10.1038/clpt.1981.214) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 112 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Säwe_1981.pdf` | Säwe J et al., Morphine kinetics in cancer patients, Clinical pharmacology and t… (1981) | popPK | 10 | [10.1038/clpt.1981.214](https://doi.org/10.1038/clpt.1981.214) | [7297022](https://pubmed.ncbi.nlm.nih.gov/7297022) | The abstract explicitly reports quantitative pharmacokinetic parameters for morphine, including volume of distribution, clearance, bioavailability, and half-life. |

<sub>queue written 2026-10-07T21:00:46.067878+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antunes_2020 | irrelevant | 0 | 0 | This is a pharmacodynamic/behavioral study of a spider venom peptide in rats; morphine is only a comparator drug and no pharmacokinetic parameters for morphine are reported. |
| popPK | Blake_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bupivacaine, with morphine only mentioned as an adjunctive analgesic without quantitative PK parameters reported for it. |
| popPK | Hill_1991 | irrelevant | 1 | 0 | The paper describes a control system for morphine concentration and mentions PK variability, but provides no specific numeric PK parameter values (CL, V, etc.) in the evidence. |
| popPK | Holm_2019 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ticagrelor and its metabolite, using morphine only as a co-administered agent to assess its impact on ticagrelor absorption, and does not provide quantitative PK parameters for morphine itself. |
| popPK | Hurwitz_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gentamicin in mice where morphine is used as a modulator/co-administered agent, rather than reporting the disposition parameters of morphine itself. |
| popPK | McPhail_2021 | irrelevant | 0 | 0 | This is a narrative review discussing pharmacometric approaches for neonatal opioid withdrawal, reporting no original quantitative PK parameter values for morphine. |
| popPK | Nicholson_2004 | irrelevant | 0 | 0 | The paper is a clinical review of methadone for cancer pain, not a pharmacokinetic study of opium alkaloids/morphine, and contains no quantitative disposition parameters. |
| popPK | Pallasch_1985 | irrelevant | 0 | 0 | The paper compares butorphanol and nalbuphine, mentioning morphine only for equianalgesic comparisons without providing PK parameters for opium alkaloids. |
| popPK | Pöyhiä_1993 | irrelevant | 0 | 0 | The paper is a review of oxycodone, a different opioid, and does not report quantitative PK parameters for opium_alkaloids_with_morphine. |
| popPK | Raffin_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lidocaine, not opium_alkaloids_with_morphine, which was only used as a comparator for pain relief. |
| popPK | Savarese_1986 | relevant | 4 | 2 | The study is a PK study of morphine in humans, but the evidence only reports qualitative comparisons and relative ratios (e.g., 86% bioavailability, 2x absorption half-life) without providing absolute quantitative parameter values like CL, V, or t1/2. |
| popPK | Steffey_1994 | irrelevant | 4 | 0 | The paper describes a two-compartment morphine PK model but provides no quantitative parameter values (CL, V, etc.) in the evidence. |
| popPK | Walker_1984 | irrelevant | 0 | 0 | The study examines renal physiology and electrolyte excretion following morphine administration, not the pharmacokinetic disposition parameters (clearance, volume, half-life) of the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:00 UTC</sub>
