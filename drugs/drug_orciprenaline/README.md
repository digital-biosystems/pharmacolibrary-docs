<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;orciprenaline&quot;}]"></div>

# orciprenaline

- **generic name:** orciprenaline
- **ATC codes:** `R03AB03`, `R03CB03`
- **DrugBank:** [DB00816](https://go.drugbank.com/drugs/DB00816) · **PubChem:** [CID 4086](https://pubchem.ncbi.nlm.nih.gov/compound/4086)
- **molar mass:** 211.2576 g/mol (C11H17NO3) — DrugBank
- **groups:** approved

## About

Orciprenaline (metaproterenol) is a bronchodilator used to treat asthma and other obstructive lung diseases. It is an approved drug, available as an inhalant and for systemic use, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416473](https://www.wikidata.org/wiki/Q416473) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| orciprenaline | parent | 211.258 | C11H17NO3 | DrugBank | [4086](https://pubchem.ncbi.nlm.nih.gov/compound/4086) | Dengler_1976 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:13 | 0:47 | 0/1/0 | 4/0/0 | 0/0/0 | 46,799/2,876 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dengler_1976_reference](drugs/drug_orciprenaline/Orciprenaline_Dengler1976_reference.md) | — | 1-compartment (no model) | 4 | Dengler HG et al., Metabolism and pharmacokinetics of orci…, Archives internationales de… (1976) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Broadley_1979_rate](drugs/drug_orciprenaline/pd_Broadley_1979_rate.md) | positive chronotropic response (rate) ← orciprenaline · stimulation effect | — | Broadley KJ et al., Functional antagonism as a means of det…, British journal of pharmaco… (1979) | [10.1111/j.1476-5381.1979.tb10844.x](https://doi.org/10.1111/j.1476-5381.1979.tb10844.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Broadley_1979_tension](drugs/drug_orciprenaline/pd_Broadley_1979_tension.md) | positive inotropic response (tension) ← orciprenaline · stimulation effect | — | Broadley KJ et al., Functional antagonism as a means of det…, British journal of pharmaco… (1979) | [10.1111/j.1476-5381.1979.tb10844.x](https://doi.org/10.1111/j.1476-5381.1979.tb10844.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [ODonnell_1978_inhibition_of_K_depolarized_guinea_pig_uterus_contractions](drugs/drug_orciprenaline/pd_ODonnell_1978_inhibition_of_K_depolarized_guinea_pig_uterus_.md) | inhibition of K(+)-depolarized guinea-pig uterus contractions ← orciprenaline · direct Emax (saturable) effect | — | O'Donnell SR et al., An in vitro comparison of beta-adrenoce…, British journal of pharmaco… (1978) | [10.1111/j.1476-5381.1978.tb08450.x](https://doi.org/10.1111/j.1476-5381.1978.tb08450.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Semenov_2019_EI](drugs/drug_orciprenaline/pd_Semenov_2019_EI.md) | red blood cell deformability (elongation index) ← metaproterenol · direct sigmoid Emax (Hill) effect | — | Semenov AN et al., The Effects of Different Signaling Path…, Frontiers in physiology (2019) | [10.3389/fphys.2019.00923](https://doi.org/10.3389/fphys.2019.00923) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Williams_1983_positive_inotropic_response_of_paced_left_atria_papillary_muscles_and_positive_chronotropic_response_of_spontaneously_beating_right_atria_to_orciprenaline](drugs/drug_orciprenaline/pd_Williams_1983_positive_inotropic_response_of_paced_left_atri.md) | positive inotropic response of paced left atria / papillary muscles and positive chronotropic response of spontaneously beating right atria to orciprenaline ← orciprenaline · direct Emax (saturable) effect | — | Williams RG et al., Determination of agonist affinity for c…, European journal of pharmac… (1983) | [10.1016/0014-2999(83)90054-7](https://doi.org/10.1016/0014-2999(83)90054-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=orciprenaline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | stomach | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dengler_1976.pdf` | Dengler HG et al., Metabolism and pharmacokinetics of orci…, Archives internationales de… (1976) | popPK | 8 | not captured | [999404](https://pubmed.ncbi.nlm.nih.gov/999404) | Original PK study of orciprenaline with numeric values (t½, Vd ~700 L, CL 1400 ml/min, bioavailability) present in the abstract. |

<sub>queue written 2026-10-07T14:12:46.713500+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Broadley_1979 | irrelevant | 0 | 0 | In-vitro pharmacodynamics (affinity/efficacy) of sympathomimetic amines in guinea-pig atria, with no PK disposition parameters for orciprenaline. |
| popPK | Broadley_1983 | irrelevant | 0 | 0 | This is an in-vitro receptor pharmacology study (KA at beta-adrenoceptors), not a pharmacokinetic study with disposition parameters for orciprenaline. |
| popPK | Gay_1987 | irrelevant | 0 | 0 | This is a respiratory mechanics study of aerosolized metaproterenol's bronchodilator effect, with no pharmacokinetic parameters for orciprenaline. |
| popPK | Kimura_1998 | irrelevant | 0 | 0 | In-vitro rat hepatocyte study of IGF mitogenesis; metaproterenol is only a co-administered agent with no PK parameters for orciprenaline. |
| popPK | Kimura_1999 | irrelevant | 0 | 0 | In-vitro rat hepatocyte study of metaproterenol (orciprenaline) effects on TGF-alpha-induced proliferation; no pharmacokinetic parameters reported. |
| popPK | ODonnell_1978 | irrelevant | 0 | 0 | In vitro pharmacodynamic potency study on guinea-pig uterus, not a PK study; orciprenaline only a test drug with EC50 potency values, no disposition parameters. |
| popPK | Semenov_2019 | irrelevant | 0 | 0 | Orciprenaline (metaproterenol) appears only as an in vitro β2-agonist in RBC deformability experiments with EC50 pharmacodynamic values, not any PK disposition parameters. |
| popPK | Williams_1983 | irrelevant | 0 | 0 | In-vitro receptor pharmacodynamics (affinity/EC50) in guinea-pig cardiac tissue, no PK disposition parameters for orciprenaline. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:12 UTC</sub>
