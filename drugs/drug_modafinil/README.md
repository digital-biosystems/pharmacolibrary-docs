<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;modafinil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Modafinil_Tao2010_reference&quot;,&quot;label&quot;:&quot;Tao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_modafinil/Modafinil_Tao2010_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# modafinil

- **generic name:** modafinil
- **ATC codes:** `N06BA07`
- **DrugBank:** [DB00745](https://go.drugbank.com/drugs/DB00745) · **PubChem:** [CID 4236](https://pubchem.ncbi.nlm.nih.gov/compound/4236)
- **molar mass:** 273.35 g/mol (C15H15NO2S) — DrugBank
- **groups:** approved, investigational

## About

Modafinil is a wakefulness-promoting stimulant used for sleep disorders such as narcolepsy and hypersomnia, and studied for fatigue, ADHD and multiple sclerosis-related tiredness. It is an approved medicine, widely used for narcolepsy, though it carries a boxed warning and is also investigated for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410441](https://www.wikidata.org/wiki/Q410441) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| modafinil | parent | 273.35 | C15H15NO2S | DrugBank | [4236](https://pubchem.ncbi.nlm.nih.gov/compound/4236) | Tao_2010, Wu_2012 |
| armodafinil | metabolite | 273.35 | C15H15NO2S | PubChem | [9690109](https://pubchem.ncbi.nlm.nih.gov/compound/9690109) | Willavize_2017 |
| modafinil acid | metabolite | 274.334 | C15H14O3S | PubChem | [3085267](https://pubchem.ncbi.nlm.nih.gov/compound/3085267) | Wu_2012 |
| modafinil sulfone | metabolite | 289.349 | C15H15NO3S | PubChem | [6460146](https://pubchem.ncbi.nlm.nih.gov/compound/6460146) | Willavize_2017 |
| R-modafinil acid | metabolite | 274.334 | C15H14O3S | PubChem | [11300303](https://pubchem.ncbi.nlm.nih.gov/compound/11300303) | Willavize_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:58 | 2:31 | 2/1/0 | 1/0/0 | 0/0/0 | 136,913/10,057 | ollama / glm-5.3-flash | 3 | 2/1 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tao_2010_reference](drugs/drug_modafinil/Modafinil_Tao2010_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Tao G et al., Population pharmacokinetics of modafini…, Therapeutic drug monitoring (2010) | [10.1097/FTD.0b013e3181cf27d3](https://doi.org/10.1097/FTD.0b013e3181cf27d3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wu_2012_reference](drugs/drug_modafinil/Modafinil_Wu2012_reference.md) | model (no simulator) | 1-compartment, oral | 7 | Wu KH et al., Population pharmacokinetics of modafini…, Acta pharmacologica Sinica (2012) | [10.1038/aps.2012.124](https://doi.org/10.1038/aps.2012.124) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Willavize_2017_reference](drugs/drug_modafinil/Modafinil_Willavize2017_reference.md) | — | general linear (no model) | 4 | Willavize S et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.800](https://doi.org/10.1002/jcph.800) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Darwish_2012_MSLT](drugs/drug_modafinil/pd_Darwish_2012_MSLT.md) | Multiple Sleep Latency Test time (placebo-subtracted) ← modafinil · direct Emax (saturable) effect | — | Darwish M et al., Armodafinil and modafinil in patients w…, Journal of clinical pharmac… (2012) | [10.1177/0091270011417825](https://doi.org/10.1177/0091270011417825) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=modafinil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inducer | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2B6` inducer/inhibitor, `CYP2C19` inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` inducer, `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1B (partial agonist), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Seng_2011.pdf` | Seng KY et al., Population pharmacokinetics of modafini…, Therapeutic drug monitoring (2011) | popPK | 10 | [10.1097/FTD.0b013e318237a9e9](https://doi.org/10.1097/FTD.0b013e318237a9e9) | [22105589](https://pubmed.ncbi.nlm.nih.gov/22105589) | A population PK model of modafinil and its metabolites in humans is described, but no numeric parameter values (CL, V, ka) appear in the evidence, likely in tables/supplements not provided. |
| `Tao_2010.pdf` | Tao G et al., Population pharmacokinetics of modafini…, Therapeutic drug monitoring (2010) | popPK | 10 | [10.1097/FTD.0b013e3181cf27d3](https://doi.org/10.1097/FTD.0b013e3181cf27d3) | [20216121](https://pubmed.ncbi.nlm.nih.gov/20216121) | Population PK (NONMEM) of modafinil in healthy volunteers with full numeric CL, Q, Vc, Vp and IIV values reported in the abstract. |
| `Willavize_2017.pdf` | Willavize S et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.800](https://doi.org/10.1002/jcph.800) | [27436172](https://pubmed.ncbi.nlm.nih.gov/27436172) | Population PK model of armodafinil (R-modafinil) and its metabolites with full numeric CL/F, Vc/F, and absorption half-life reported directly in the abstract. |
| `Ma_2012.pdf` | Ma ZQ et al., [Pharmacokinetics--pharmacodynamics of…, Yao xue xue bao = Acta phar… (2012) | popPK | 8 | not captured | [22493813](https://pubmed.ncbi.nlm.nih.gov/22493813) | Mouse PK study reporting numeric two-compartment parameters (t1/2α, t1/2β, Cmax, AUC) directly in the abstract, though CL/V not given. |
| `Darwish_2012.pdf` | Darwish M et al., Armodafinil and modafinil in patients w…, Journal of clinical pharmac… (2012) | popPK | 6 | [10.1177/0091270011417825](https://doi.org/10.1177/0091270011417825) | [22039290](https://pubmed.ncbi.nlm.nih.gov/22039290) | Population PK model for modafinil/armodafinil is described, but numeric PK parameters (CL, V, ka) are not shown in the evidence; only an EC50 value appears. |

<sub>queue written 2026-10-07T00:55:48.310140+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chayrov_2022 | irrelevant | 0 | 0 | This is a synthesis/neuroprotection/solubility study of memantine conjugates; modafinil is only a chemical moiety, with no PK disposition parameters reported. |
| popPK | Darwish_2012 | relevant | 6 | 3 | Population PK model for modafinil/armodafinil is described, but numeric PK parameters (CL, V, ka) are not shown in the evidence; only an EC50 value appears. |
| popPK | Lees_2017 | irrelevant | 0 | 0 | This is a cognitive-effects trial of modafinil with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported; the only numbers are neuropsychological test scores. |
| popPK | Novotna_2014 | irrelevant | 0 | 0 | In-vitro receptor reporter study with no PK disposition parameters for modafinil. |
| popPK | Seng_2011 | relevant | 10 | 3 | A population PK model of modafinil and its metabolites in humans is described, but no numeric parameter values (CL, V, ka) appear in the evidence, likely in tables/supplements not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:56 UTC</sub>
