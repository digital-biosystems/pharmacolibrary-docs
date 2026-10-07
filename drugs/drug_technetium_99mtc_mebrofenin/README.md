<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09D&quot;,&quot;href&quot;:&quot;atc/V09D.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) mebrofenin&quot;}]"></div>

# technetium (99mTc) mebrofenin

- **generic name:** technetium (99mTc) mebrofenin
- **ATC codes:** `V09DA04`
- **DrugBank:** [DB09137](https://go.drugbank.com/drugs/DB09137) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Technetium (99mTc) mebrofenin is a diagnostic radiopharmaceutical used for imaging of the liver and biliary system. It is an approved imaging agent used in nuclear medicine for hepatobiliary scans.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7692227](https://www.wikidata.org/wiki/Q7692227) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| technetium_99mtc_mebrofenin | metabolite | 867.428 | C30H34Br2N4O10Tc | PubChem | [172866200](https://pubchem.ncbi.nlm.nih.gov/compound/172866200) | Ali_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:31 | 3:39 | 0/1/0 | 0/0/0 | 0/0/0 | 27,985/9,259 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ali_2017_reference](drugs/drug_technetium_99mtc_mebrofenin/Technetium99mtcMebrofenin_Ali2017_reference.md) | — | 1-compartment (no model) | 2 | Ali I et al., Transporter-Mediated Alterations in Pat…, Clinical pharmacology and t… (2017) | [10.1002/cpt.997](https://doi.org/10.1002/cpt.997) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=technetium_99mtc_mebrofenin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ali_2017.pdf` | Ali I et al., Transporter-Mediated Alterations in Pat…, Clinical pharmacology and t… (2017) | popPK | 10 | [10.1002/cpt.997](https://doi.org/10.1002/cpt.997) | [29271075](https://pubmed.ncbi.nlm.nih.gov/29271075) | Human population-PK parameters including biliary clearance and central volume are reported numerically in the evidence. |
| `Ghibellini_2007.pdf` | Ghibellini G et al., In vitro-in vivo correlation of hepatob…, Clinical pharmacology and t… (2007) | popPK | 9 | [10.1038/sj.clpt.6100059](https://doi.org/10.1038/sj.clpt.6100059) | [17235333](https://pubmed.ncbi.nlm.nih.gov/17235333) | Human MEB biliary clearance values are reported numerically (7.44 in vitro and 16.1 in vivo). |
| `Kapuściński_1986.pdf` | Kapuściński J et al., Comparison in rabbits of chole-scintigr…, Nuklearmedizin. Nuclear med… (1986) | popPK | 9 | not captured | [3797258](https://pubmed.ncbi.nlm.nih.gov/3797258) | Rabbit mebrofenin disposition was assessed, but no numeric parameter values appear in the provided evidence. |
| `Kapuściński_1995.pdf` | Kapuściński J et al., Experimental toxic liver damage and hep…, International journal of oc… (1995) | popPK | 9 | not captured | [8581333](https://pubmed.ncbi.nlm.nih.gov/8581333) | Rabbit mebrofenin clearance and transfer parameters are studied, but no numeric values are provided in the evidence. |
| `Kapuściński_1993.pdf` | Kapuściński J et al., Experimental toxic liver damage and hep…, Polish journal of occupatio… (1993) | popPK | 8 | not captured | [8019202](https://pubmed.ncbi.nlm.nih.gov/8019202) | Rabbit hepatic clearance and uptake/transfer were studied, but no numeric parameter values are provided in the evidence. |
| `Kapuściński_1993_2.pdf` | Kapuściński J et al., Experimental toxic liver damage and hep…, Polish journal of occupatio… (1993) | popPK | 8 | not captured | [8219908](https://pubmed.ncbi.nlm.nih.gov/8219908) | It studies hepatic plasma clearance and transfer of 99mTc-mebrofenin in rabbits, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T19:30:29.868671+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kapuściński_1986 | relevant | 9 | 0 | Rabbit mebrofenin disposition was assessed, but no numeric parameter values appear in the provided evidence. |
| popPK | Kapuściński_1993 | relevant | 8 | 0 | Rabbit hepatic clearance and uptake/transfer were studied, but no numeric parameter values are provided in the evidence. |
| popPK | Kapuściński_1993_2 | relevant | 8 | 0 | It studies hepatic plasma clearance and transfer of 99mTc-mebrofenin in rabbits, but no numeric parameter values are provided in the evidence. |
| popPK | Kapuściński_1995 | relevant | 9 | 0 | Rabbit mebrofenin clearance and transfer parameters are studied, but no numeric values are provided in the evidence. |
| popPK | Kovács_2017 | irrelevant | 1 | 0 | Mebrofenin is used as a diagnostic imaging agent, and numeric values are only described in figures not provided. |
| popPK | Marie_2021 | irrelevant | 1 | 0 | The evidence is a review-style overview with no quantitative disposition parameter values. |
| popPK | McGinty_1994 | irrelevant | 2 | 1 | Mebrofenin is used as a diagnostic probe, and only relative uptake and elimination changes—not numeric disposition parameter values—are reported. |
| popPK | Mizuguchi_2014 | irrelevant | 0 | 0 | This review mentions mebrofenin scintigraphy but reports no quantitative pharmacokinetic parameters. |
| popPK | Morandi_2014 | irrelevant | 1 | 0 | This is a veterinary review and provides no numeric disposition parameters for technetium-99m mebrofenin. |
| popPK | Parker_2024 | irrelevant | 2 | 9 | Reports numeric clearance for a diagnostic liver-imaging tracer, not population-PK parameters. |
| popPK | Rassam_2017 | irrelevant | 0 | 0 | This is a review and reports no quantitative pharmacokinetic disposition parameters for technetium-99m mebrofenin. |
| popPK | Ünal_2016 | irrelevant | 0 | 0 | This review mentions mebrofenin only as an alternative imaging test and reports no quantitative pharmacokinetic values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:30 UTC</sub>
