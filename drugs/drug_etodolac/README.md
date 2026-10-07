<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;etodolac&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etodolac_de2017_reference&quot;,&quot;label&quot;:&quot;de_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etodolac/Etodolac_de2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# etodolac

- **generic name:** etodolac
- **ATC codes:** `M01AB08`
- **DrugBank:** [DB00749](https://go.drugbank.com/drugs/DB00749) · **PubChem:** [CID 3308](https://pubchem.ncbi.nlm.nih.gov/compound/3308)
- **molar mass:** 287.3535 g/mol (C17H21NO3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

It is an approved medicine, also approved for veterinary use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2465218](https://www.wikidata.org/wiki/Q2465218) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| etodolac | parent | 287.353 | C17H21NO3 | DrugBank | [3308](https://pubchem.ncbi.nlm.nih.gov/compound/3308) | Baek_2019, de_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:48 | 0:21 | 1/2/0 | 0/1/1 | 0/0/0 | 47,202/3,550 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2017_reference](drugs/drug_etodolac/Etodolac_de2017_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | de Miranda Silva C et al., Development of an Enantioselective and…, The AAPS journal (2017) | [10.1208/s12248-017-0138-9](https://doi.org/10.1208/s12248-017-0138-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Baek_2019_reference](drugs/drug_etodolac/Etodolac_Baek2019_reference.md) | — | 1-compartment (no model) | 5 | Baek IH, Pharmacokinetic modeling and simulation…, Xenobiotica; the fate of fo… (2019) | [10.1080/00498254.2018.1524185](https://doi.org/10.1080/00498254.2018.1524185) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Boni_1999_reference](drugs/drug_etodolac/Etodolac_Boni1999_reference.md) | — | 1-compartment (no model) | 0 | Boni J et al., Pharmacokinetic and pharmacodynamic act…, Journal of clinical pharmac… (1999) | [10.1177/00912709922008254](https://doi.org/10.1177/00912709922008254) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Boni_1999_pain_intensity_difference_scores](drugs/drug_etodolac/pd_Boni_1999_pain_intensity_difference_scores.md) | pain intensity difference scores ← etodolac · indirect response — drug inhibits the production of pain intensity difference scores | model (no simulator) | Boni J et al., Pharmacokinetic and pharmacodynamic act…, Journal of clinical pharmac… (1999) | [10.1177/00912709922008254](https://doi.org/10.1177/00912709922008254) |
| <span class="pk-badge pk-badge--red">rejected</span> | [de_2017_pain_score](drugs/drug_etodolac/pd_de_2017_pain_score.md) | pain score ← S-etodolac · direct Emax (saturable) effect | — | de Miranda Silva C et al., Development of an Enantioselective and…, The AAPS journal (2017) | [10.1208/s12248-017-0138-9](https://doi.org/10.1208/s12248-017-0138-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etodolac) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `UGT1A3` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor), RXRA (other), UGT1A10 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baek_2019.pdf` | Baek IH, Pharmacokinetic modeling and simulation…, Xenobiotica; the fate of fo… (2019) | popPK | 10 | [10.1080/00498254.2018.1524185](https://doi.org/10.1080/00498254.2018.1524185) | [30216103](https://pubmed.ncbi.nlm.nih.gov/30216103) | The abstract reports quantitative pharmacokinetic parameters including absorption rate (Ka = 1.49 h-1), half-life (39.55 h), and AUC values for etodolac in dogs. |
| `Boni_1999.pdf` | Boni J et al., Pharmacokinetic and pharmacodynamic act…, Journal of clinical pharmac… (1999) | popPK | 10 | [10.1177/00912709922008254](https://doi.org/10.1177/00912709922008254) | [10392328](https://pubmed.ncbi.nlm.nih.gov/10392328) | The study reports quantitative population pharmacokinetic parameters (clearance, volume, ka) for etodolac in humans, with all numeric values explicitly provided in the text. |
| `Davis_2007.pdf` | Davis JL et al., Pharmacokinetics of etodolac in the hor…, Journal of veterinary pharm… (2007) | popPK | 10 | [10.1111/j.1365-2885.2007.00811.x](https://doi.org/10.1111/j.1365-2885.2007.00811.x) | [17217400](https://pubmed.ncbi.nlm.nih.gov/17217400) | The paper explicitly reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance, bioavailability) for etodolac in horses. |
| `de_2017.pdf` | de Miranda Silva C et al., Development of an Enantioselective and…, The AAPS journal (2017) | popPK | 10 | [10.1208/s12248-017-0138-9](https://doi.org/10.1208/s12248-017-0138-9) | [28875479](https://pubmed.ncbi.nlm.nih.gov/28875479) | The evidence explicitly reports quantitative population PK parameters (clearance and volume of distribution) for both R- and S-etodolac in human subjects. |

<sub>queue written 2026-10-07T00:48:08.133429+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Benet_1993 | irrelevant | 3 | 0 | This appears to be a review article (based on the lack of specific study design details in the evidence) that only provides a general average half-life, without extracting specific compartmental parameters (CL, V, Q, ka) from a population or individual PK study in the provided text. |
| popPK | Poradowski_2019 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of NSAIDs on canine cancer cells and does not report any pharmacokinetic parameters for etodolac. |
| popPK | Qosa_2016 | irrelevant | 0 | 0 | The study focuses on etodolac's ability to enhance blood-brain barrier integrity in an in-vitro cell model, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:48 UTC</sub>
