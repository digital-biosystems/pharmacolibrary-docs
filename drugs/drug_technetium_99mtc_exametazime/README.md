<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09A&quot;,&quot;href&quot;:&quot;atc/V09A.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) exametazime&quot;}]"></div>

# technetium (99mTc) exametazime

- **generic name:** technetium (99mTc) exametazime
- **ATC codes:** `V09AA01`
- **DrugBank:** [DB09163](https://go.drugbank.com/drugs/DB09163) · **PubChem:** not captured
- **groups:** approved

## About

Technetium (99mTc) exametazime is a radiopharmaceutical used as a diagnostic imaging agent for the central nervous system. It is an approved diagnostic radiopharmaceutical used in nuclear medicine for brain imaging.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7692225](https://www.wikidata.org/wiki/Q7692225) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydrophilic HM-PAO | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:54 | 4:04 | 0/1/0 | 0/0/0 | 0/0/0 | 41,928/15,734 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lassen_1988_reference](drugs/drug_technetium_99mtc_exametazime/Technetium99mtcExametazime_Lassen1988_reference.md) | — | parent + metabolite (no model) | 4 | Lassen NA et al., The retention of [99mTc]-d,l-HM-PAO in…, Journal of cerebral blood f… (1988) | [10.1038/jcbfm.1988.28](https://doi.org/10.1038/jcbfm.1988.28) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=technetium_99mtc_exametazime) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 67 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lassen_1988.pdf` | Lassen NA et al., The retention of [99mTc]-d,l-HM-PAO in…, Journal of cerebral blood f… (1988) | popPK | 10 | [10.1038/jcbfm.1988.28](https://doi.org/10.1038/jcbfm.1988.28) | [3192638](https://pubmed.ncbi.nlm.nih.gov/3192638) | Human brain kinetic model reports numeric clearance and compartmental rate parameters for HM-PAO. |
| `Apostolova_2012.pdf` | Apostolova I et al., Brain perfusion SPECT in the mouse: nor…, NeuroImage (2012) | popPK | 9 | [10.1016/j.neuroimage.2012.08.038](https://doi.org/10.1016/j.neuroimage.2012.08.038) | [22971548](https://pubmed.ncbi.nlm.nih.gov/22971548) | Mouse HMPAO kinetics include numeric peak uptake and tissue washout values. |
| `Clough_2019.pdf` | Clough AV et al., Pharmacokinetics of 99mTc-HMPAO in isol…, Journal of applied physiolo… (2019) | popPK | 9 | [10.1152/japplphysiol.00717.2018](https://doi.org/10.1152/japplphysiol.00717.2018) | [31414953](https://pubmed.ncbi.nlm.nih.gov/31414953) | A pulmonary disposition model was fit, but its numeric parameters are not included in the evidence. |
| `Kao_1995.pdf` | Kao CH et al., Supine lung clearance of Tc-99m DTPA an…, Clinical nuclear medicine (1995) | popPK | 7 | [10.1097/00003072-199507000-00016](https://doi.org/10.1097/00003072-199507000-00016) | [7554670](https://pubmed.ncbi.nlm.nih.gov/7554670) | Human lung clearance of HMPAO was measured, but no numeric clearance values are present in the evidence. |

<sub>queue written 2026-10-07T18:52:32.960143+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Algotsson_1993 | irrelevant | 0 | 0 | HMPAO is used as a cerebral blood-flow imaging agent, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Andersen_1987 | irrelevant | 1 | 1 | This is a human imaging comparison reporting brain-count loss, not quantitative pharmacokinetic disposition parameters. |
| popPK | Clough_2019 | relevant | 9 | 1 | A pulmonary disposition model was fit, but its numeric parameters are not included in the evidence. |
| popPK | Friberg_1994 | irrelevant | 0 | 0 | The kinetic values are for 99mTc-bicisate (ECD), not technetium_99mtc_exametazime (HM-PAO). |
| popPK | Isaka_1994 | irrelevant | 0 | 0 | The study reports cerebral blood flow measurements, not pharmacokinetic disposition parameters for technetium-99m HMPAO. |
| popPK | Kao_1995 | relevant | 7 | 0 | Human lung clearance of HMPAO was measured, but no numeric clearance values are present in the evidence. |
| popPK | Kothari_2000 | irrelevant | 0 | 0 | This study reports qualitative biodistribution of different technetium complexes, not pharmacokinetic parameters for technetium_99mtc_exametazime. |
| popPK | Lukawska_2014 | irrelevant | 1 | 0 | The reported half-lives describe labeled-cell efflux, not technetium_99mtc_exametazime pharmacokinetic parameters. |
| popPK | Léveillé_1992 | irrelevant | 3 | 1 | Human HMPAO imaging is compared, but the evidence gives no quantitative PK parameters beyond a brain-washout percentage. |
| popPK | Matsuda_1991 | irrelevant | 0 | 0 | The quantitative findings are for 99mTc-ECD; HMPAO is only a comparison agent. |
| popPK | Mills_2013 | irrelevant | 0 | 0 | This is a review of cerebral vasospasm imaging and reports no quantitative pharmacokinetic parameters for technetium-99m exametazime. |
| popPK | Moerlein_1994 | irrelevant | 1 | 0 | Technetium-99m HMPAO is only a comparator; the reported numeric values are for iodine-123 tracers. |
| popPK | Ogasawara_1995 | irrelevant | 2 | 0 | Human tracer washout is described qualitatively, with no numeric disposition parameters reported. |
| popPK | Ruf_2010 | irrelevant | 0 | 0 | This is a clinical review and reports no quantitative disposition parameters for technetium_99mtc_exametazime. |
| popPK | Sharma_2017 | irrelevant | 0 | 0 | This is a review and provides no quantitative pharmacokinetic parameters for technetium_99mtc_exametazime. |
| popPK | Youssef_1996 | irrelevant | 1 | 0 | Technetium-99m exametazime is used to label neutrophils, and no drug disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:53 UTC</sub>
