<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;adefovir dipivoxil&quot;}]"></div>

# adefovir dipivoxil

- **generic name:** adefovir dipivoxil
- **ATC codes:** `J05AF08`
- **DrugBank:** [DB00718](https://go.drugbank.com/drugs/DB00718) · **PubChem:** [CID 60871](https://pubchem.ncbi.nlm.nih.gov/compound/60871)
- **molar mass:** 501.4705 g/mol (C20H32N5O8P) — DrugBank
- **groups:** approved

## About

Adefovir dipivoxil is an antiviral nucleotide reverse transcriptase inhibitor used to treat chronic hepatitis B. It has been approved as a medicine, but its product was withdrawn in the European Union, so it is no longer marketed there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28851735](https://www.wikidata.org/wiki/Q28851735) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| adefovir dipivoxil | parent | 501.471 | C20H32N5O8P | DrugBank | [60871](https://pubchem.ncbi.nlm.nih.gov/compound/60871) | Dong_2024 |
| adefovir | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:56 | 3:04 | 0/2/0 | 0/0/0 | 0/0/0 | 131,135/9,291 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dong_2024_reference](drugs/drug_adefovir_dipivoxil/AdefovirDipivoxil_Dong2024_reference.md) | — | 1-compartment (no model) | 7 | Dong Q et al., Understanding adefovir pharmacokinetics…, European journal of clinica… (2024) | [10.1007/s00228-024-03673-x](https://doi.org/10.1007/s00228-024-03673-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Huang_2014_reference](drugs/drug_adefovir_dipivoxil/AdefovirDipivoxil_Huang2014_reference.md) | — | 1-compartment (no model) | 0 | Huang J et al., Population pharmacokinetics of adefovir…, International journal of cl… (2014) | [10.5414/CP201928](https://doi.org/10.5414/CP201928) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=adefovir_dipivoxil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | liver | `SLC22A3` substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` substrate | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC4` substrate, `SLC22A6` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (substrate), AK2 (substrate), AK4 (substrate), NME1 (substrate), NME2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_2014.pdf` | Huang J et al., Population pharmacokinetics of adefovir…, International journal of cl… (2014) | popPK | 10 | [10.5414/CP201928](https://doi.org/10.5414/CP201928) | [24219967](https://pubmed.ncbi.nlm.nih.gov/24219967) | The paper reports a population PK model with explicit numeric values for CL, V2, Q, V3, and Ka in the abstract. |

<sub>queue written 2026-10-07T12:53:54.640041+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2007 | irrelevant | 0 | 0 | The study focuses on the in vitro anti-HBV activity and stability of novel prodrugs, using adefovir dipivoxil only as a positive control without reporting its quantitative pharmacokinetic parameters. |
| popPK | Fu_2008 | irrelevant | 0 | 0 | This is a medicinal chemistry study focused on the design and synthesis of new prodrugs with in vitro antiviral activity, reporting no pharmacokinetic disposition parameters for adefovir dipivoxil. |
| popPK | Lee_2014 | irrelevant | 0 | 0 | The study evaluates renal function (eGFR) outcomes in a clinical trial comparing antiviral regimens, rather than reporting quantitative pharmacokinetic disposition parameters for adefovir dipivoxil. |
| popPK | Li_2019 | irrelevant | 1 | 0 | The paper describes in vitro studies on adefovir derivatives (specifically compound 6c) with adefovir dipivoxil serving only as a comparator, and no quantitative PK parameters for adefovir dipivoxil are provided in the text. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The study focuses on viral resistance and EC50 values in cell culture, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Pfister_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amprenavir; adefovir dipivoxil is mentioned only as a background medication and no PK parameters for it are reported. |
| popPK | Pfister_2003 | irrelevant | 0 | 0 | The study models the pharmacokinetics of efavirenz, nelfinavir, and indinavir, while adefovir dipivoxil is only mentioned as part of the background regimen. |
| popPK | Su_2018 | irrelevant | 0 | 0 | The study assesses renal function (eGFR/Cr) safety in chronic hepatitis B patients treated with adefovir, but does not report pharmacokinetic parameters (CL, V, ka, t1/2) for adefovir. |
| popPK | Svarovskaia_2013 | irrelevant | 0 | 0 | The study evaluates viral load decline kinetics (pharmacodynamics) in patients, not the pharmacokinetic parameters of adefovir dipivoxil. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:54 UTC</sub>
