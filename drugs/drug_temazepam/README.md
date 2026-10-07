<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;temazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Temazepam_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_temazepam/Temazepam_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# temazepam

- **generic name:** temazepam
- **ATC codes:** `N05CD07`
- **DrugBank:** [DB00231](https://go.drugbank.com/drugs/DB00231) · **PubChem:** [CID 5391](https://pubchem.ncbi.nlm.nih.gov/compound/5391)
- **molar mass:** 300.74 g/mol (C16H13ClN2O2) — DrugBank
- **groups:** approved

## About

Temazepam is a benzodiazepine sedative used to treat insomnia and anxiety-related conditions such as anxiety disorder, panic disorder, and sleep-wake disorders. It is an approved medicine and remains in use as a hypnotic and anxiolytic, though benzodiazepines are generally prescribed for short-term treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414796](https://www.wikidata.org/wiki/Q414796) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| temazepam | parent | 300.74 | C16H13ClN2O2 | DrugBank | [5391](https://pubchem.ncbi.nlm.nih.gov/compound/5391) | Schwarz_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:44 | 2:46 | 1/4/0 | 1/0/0 | 0/0/0 | 120,780/8,018 | ollama / glm-5.3-flash | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_reference](drugs/drug_temazepam/Temazepam_Wang2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Wang LL et al., Pharmacokinetics of Diazepam and Its Me…, Drugs in R&D (2022) | [10.1007/s40268-021-00375-y](https://doi.org/10.1007/s40268-021-00375-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Schwarz_1979_dog](drugs/drug_temazepam/Temazepam_Schwarz1979_dog.md) | — | 1-compartment (no model) | 3 | Schwarz HJ, Pharmacokinetics and metabolism of tema…, British journal of clinical… (1979) | [10.1111/j.1365-2125.1979.tb00451.x](https://doi.org/10.1111/j.1365-2125.1979.tb00451.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Schwarz_1979_man](drugs/drug_temazepam/Temazepam_Schwarz1979_man.md) | — | 1-compartment (no model) | 3 | Schwarz HJ, Pharmacokinetics and metabolism of tema…, British journal of clinical… (1979) | [10.1111/j.1365-2125.1979.tb00451.x](https://doi.org/10.1111/j.1365-2125.1979.tb00451.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Schwarz_1979_mouse](drugs/drug_temazepam/Temazepam_Schwarz1979_mouse.md) | — | 1-compartment (no model) | 2 | Schwarz HJ, Pharmacokinetics and metabolism of tema…, British journal of clinical… (1979) | [10.1111/j.1365-2125.1979.tb00451.x](https://doi.org/10.1111/j.1365-2125.1979.tb00451.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Schwarz_1979_rat](drugs/drug_temazepam/Temazepam_Schwarz1979_rat.md) | — | 1-compartment (no model) | 3 | Schwarz HJ, Pharmacokinetics and metabolism of tema…, British journal of clinical… (1979) | [10.1111/j.1365-2125.1979.tb00451.x](https://doi.org/10.1111/j.1365-2125.1979.tb00451.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Morino_1986_percent_anticonvulsant_effect_protection_against_pentylenetetrazole_induced_clonic_convulsion](drugs/drug_temazepam/pd_Morino_1986_percent_anticonvulsant_effect_protection_against.md) | percent anticonvulsant effect (protection against pentylenetetrazole-induced clonic convulsion) ← temazepam · direct sigmoid Emax (Hill) effect | — | Morino A et al., Receptor-mediated model relating antico…, Journal of pharmacokinetics… (1986) | [10.1007/BF01106709](https://doi.org/10.1007/BF01106709) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=temazepam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2B6` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 5  ·  extracted 1  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ghabrial_1986.pdf` | Ghabrial H et al., The effects of age and chronic liver di…, European journal of clinica… (1986) | popPK | 8 | [10.1007/BF00614203](https://doi.org/10.1007/BF00614203) | [2872062](https://pubmed.ncbi.nlm.nih.gov/2872062) | Human PK study of temazepam with two-compartment and noncompartmental analysis, but only a half-life value (15.5 h) appears; CL/V values are not shown in the evidence. |

<sub>queue written 2026-10-06T22:42:29.942384+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acikgöz_2009 | irrelevant | 3 | 1 | In-vitro hepatocyte model of diazepam metabolism where temazepam is only a metabolite, with no numeric PK parameter values present in the evidence. |
| popPK | Acikgöz_2012 | irrelevant | 2 | 1 | Temazepam appears only as a metabolite of diazepam in an in vitro hepatocyte culture study; no PK disposition parameters (CL, V, half-life) for temazepam are reported, and metabolite concentrations are in figures not provided. |
| popPK | Andersson_1994 | irrelevant | 3 | 2 | In-vitro microsomal metabolism study of diazepam with temazepam only as a metabolite; no disposition parameters (CL, V, half-life) for temazepam and no numeric values in the evidence. |
| popPK | Ghabrial_1986 | relevant | 8 | 4 | Human PK study of temazepam with two-compartment and noncompartmental analysis, but only a half-life value (15.5 h) appears; CL/V values are not shown in the evidence. |
| popPK | Karlsson_2000 | irrelevant | 3 | 0 | This is a pharmacodynamic Markov model of temazepam's sleep effects; PK was measured but no quantitative disposition parameter values appear in the evidence. |
| popPK | Khan_2018 | irrelevant | 0 | 0 | Environmental occurrence study measuring temazepam concentrations in wastewater, not a pharmacokinetic study with disposition parameters. |
| popPK | Morino_1986 | irrelevant | 1 | 1 | This is a camazepam receptor-binding/PD study in rats; temazepam appears only as a metabolite with no PK disposition parameters reported. |
| popPK | Richards_1990 | irrelevant | 0 | 0 | Temazepam is only a premedication; the PK parameters reported are for propofol, not temazepam. |
| popPK | Seddon_1989 | irrelevant | 2 | 1 | Temazepam is only an in-vitro substrate/metabolite in monkey hepatocytes; no numeric disposition parameters for temazepam itself are reported. |
| popPK | Wang_2020 | irrelevant | 2 | 4 | Temazepam appears only as a glucuronide metabolite formed after diazepam dosing (diazepam is the subject drug); no temazepam parent dosing or temazepam disposition model, though some half-life values for the metabolite are present. |
| popPK | Wang_2022 | irrelevant | 3 | 5 | Temazepam is only a metabolite of the subject drug diazepam (temazepam itself was even excluded from analysis); only TG (temazepam glucuronide) urinary parameters like t½ 200.17 h and Cmax 145.61 ng/mL appear, not temazepam disposition parameters. |
| popPK | Xiao_2026 | irrelevant | 2 | 3 | The subject drug is diazepam; temazepam appears only as a metabolite with no PK parameters reported for it specifically. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:42 UTC</sub>
