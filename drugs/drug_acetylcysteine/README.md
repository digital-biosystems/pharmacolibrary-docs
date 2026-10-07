<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;acetylcysteine&quot;}]"></div>

# acetylcysteine

- **generic name:** acetylcysteine
- **ATC codes:** `R05CB01`, `S01XA08`, `V03AB23`
- **DrugBank:** [DB06151](https://go.drugbank.com/drugs/DB06151) · **PubChem:** [CID 12035](https://pubchem.ncbi.nlm.nih.gov/compound/12035)
- **molar mass:** 163.195 g/mol (C5H9NO3S) — DrugBank
- **groups:** approved, investigational

## About

Acetylcysteine is a mucolytic used for respiratory conditions with thick mucus such as bronchitis, pneumonia, cystic fibrosis and bronchiectasis, and as an antidote for paracetamol toxicity. It is widely used, appears on the WHO list of essential medicines, and is also approved for some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q375613](https://www.wikidata.org/wiki/Q375613) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| N-acetylcysteine (acetylcysteine) | parent | 163.195 | C5H9NO3S | DrugBank | [12035](https://pubchem.ncbi.nlm.nih.gov/compound/12035) | Brown_2004, Teder_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:30 | 2:42 | 0/4/0 | 2/0/0 | 0/0/0 | 265,777/14,445 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Brown_2004_reference](drugs/drug_acetylcysteine/Acetylcysteine_Brown2004_reference.md) | — | 1-compartment (no model) | 4 | Brown M et al., Pharmacokinetics of intravenous N-acety…, European journal of clinica… (2004) | [10.1007/s00228-004-0862-9](https://doi.org/10.1007/s00228-004-0862-9) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fayed_2023_reference](drugs/drug_acetylcysteine/Acetylcysteine_Fayed2023_reference.md) | — | 1-compartment (no model) | 0 | Fayed MS et al., Population Pharmacokinetic Model of N-A…, Clinical pharmacology in dr… (2023) | [10.1002/cpdd.1338](https://doi.org/10.1002/cpdd.1338) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sahasrabudhe_2021_reference](drugs/drug_acetylcysteine/Acetylcysteine_Sahasrabudhe2021_reference.md) | — | 1-compartment (no model) | 0 | Sahasrabudhe SA et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1943](https://doi.org/10.1002/jcph.1943) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Teder_2021_reference](drugs/drug_acetylcysteine/Acetylcysteine_Teder2021_reference.md) | — | 1-compartment (no model) | 6 | Teder K et al., The Pharmacokinetic Profile and Bioavai…, Medicina (Kaunas, Lithuania) (2021) | [10.3390/medicina57111218](https://doi.org/10.3390/medicina57111218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chamorro_2023_CV](drugs/drug_acetylcysteine/pd_Chamorro_2023_CV.md) | cell viability ← N-acetylcysteine · direct sigmoid Emax (Hill) effect | — | Chamorro B et al., Neuroprotective and Antioxidant Propert…, Antioxidants (Basel, Switze… (2023) | [10.3390/antiox12071364](https://doi.org/10.3390/antiox12071364) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chamorro_2023_Casp3](drugs/drug_acetylcysteine/pd_Chamorro_2023_Casp3.md) | Caspase-3 activity ← N-acetylcysteine · direct sigmoid Emax (Hill) effect | — | Chamorro B et al., Neuroprotective and Antioxidant Propert…, Antioxidants (Basel, Switze… (2023) | [10.3390/antiox12071364](https://doi.org/10.3390/antiox12071364) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chamorro_2023_LDH](drugs/drug_acetylcysteine/pd_Chamorro_2023_LDH.md) | LDH release ← N-acetylcysteine · direct sigmoid Emax (Hill) effect | — | Chamorro B et al., Neuroprotective and Antioxidant Propert…, Antioxidants (Basel, Switze… (2023) | [10.3390/antiox12071364](https://doi.org/10.3390/antiox12071364) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chamorro_2023_O2_production](drugs/drug_acetylcysteine/pd_Chamorro_2023_O2_production.md) | Superoxide production ← N-acetylcysteine · direct sigmoid Emax (Hill) effect | — | Chamorro B et al., Neuroprotective and Antioxidant Propert…, Antioxidants (Basel, Switze… (2023) | [10.3390/antiox12071364](https://doi.org/10.3390/antiox12071364) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Owens_2015_INR](drugs/drug_acetylcysteine/pd_Owens_2015_INR.md) | international normalized ratio ← N-acetylcysteine · direct Emax (saturable) effect | — | Owens KH et al., Population pharmacokinetic-pharmacodyna…, Clinical and experimental p… (2015) | [10.1111/1440-1681.12327](https://doi.org/10.1111/1440-1681.12327) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acetylcysteine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `SLCO1B1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACY1 (substrate), CHUK (inhibitor), GRIN1 (activator), GRIN2A (activator), GRIN2B (activator), GRIN2D (activator), GRIN3A (activator), GSS (stimulator), IKBKB (inhibitor), NAPQI (N-acetyl-p-benzoquinone imine) (reducer), SLC7A11 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 67 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brown_2004.pdf` | Brown M et al., Pharmacokinetics of intravenous N-acety…, European journal of clinica… (2004) | popPK | 10 | [10.1007/s00228-004-0862-9](https://doi.org/10.1007/s00228-004-0862-9) | [15619135](https://pubmed.ncbi.nlm.nih.gov/15619135) | The paper reports quantitative population PK parameters (CL, V1) for acetylcysteine in humans, with specific numeric values and confidence intervals provided in the abstract. |
| `Buur_2013.pdf` | Buur JL et al., Pharmacokinetics of N-acetylcysteine af…, American journal of veterin… (2013) | popPK | 10 | [10.2460/ajvr.74.2.290](https://doi.org/10.2460/ajvr.74.2.290) | [23363356](https://pubmed.ncbi.nlm.nih.gov/23363356) | Study reports PK parameters for NAC in cats (t1/2, F, model), but specific clearance/volume values are not explicitly listed in the provided abstract text, though they are implied to be present in the full study. |
| `Fayed_2023.pdf` | Fayed MS et al., Population Pharmacokinetic Model of N-A…, Clinical pharmacology in dr… (2023) | popPK | 10 | [10.1002/cpdd.1338](https://doi.org/10.1002/cpdd.1338) | [37937383](https://pubmed.ncbi.nlm.nih.gov/37937383) | The study reports a 2-compartment population PK model for N-acetylcysteine with explicit numeric values for clearance and volume of distribution. |
| `Sahasrabudhe_2021.pdf` | Sahasrabudhe SA et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1943](https://doi.org/10.1002/jcph.1943) | [34275158](https://pubmed.ncbi.nlm.nih.gov/34275158) | The paper reports a population pharmacokinetic analysis of N-acetylcysteine with specific numeric values for CL, V1, V2, and Q explicitly stated in the evidence text. |

<sub>queue written 2026-10-07T22:28:43.769360+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Branco_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of mercury toxicity and redox signaling where NAC is used as a pre-exposure protective agent, not as a subject of pharmacokinetic characterization. |
| popPK | Buur_2013 | relevant | 10 | 4 | Study reports PK parameters for NAC in cats (t1/2, F, model), but specific clearance/volume values are not explicitly listed in the provided abstract text, though they are implied to be present in the full study. |
| popPK | Chamorro_2023 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamics study comparing neuroprotective and antioxidant effects (EC50, cell viability), and N-acetylcysteine is used only as a positive control, with no pharmacokinetic parameters reported. |
| popPK | Chiew_2016 | irrelevant | 2 | 0 | The paper is a review/simulation study that uses a *published* PK model but does not report original quantitative PK parameter values for acetylcysteine itself. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | The paper is an in vitro radioprotection screening study using a tissue chip model; N-acetylcysteine is used only as a comparative agent for biological efficacy, with no pharmacokinetic parameters reported. |
| popPK | Figueroa_2021 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of zinc pyrithione on VRAC channels, and acetylcysteine is used only as a ROS scavenger comparator without any pharmacokinetic analysis or quantitative disposition parameters. |
| popPK | García-Alvarado_2019 | irrelevant | 0 | 0 | The study focuses on the neurotoxic mechanisms of otilonium and pinaverium in rat neurons, using N-acetylcysteine only as a non-protective antioxidant control, and contains no pharmacokinetic data. |
| popPK | Gawarammana_2011 | irrelevant | 0 | 0 | The paper is a review of paraquat poisoning where acetylcysteine is only mentioned as a potential antioxidant therapy without any reported PK parameters. |
| popPK | Isbister_2001 | irrelevant | 1 | 0 | The paper reports pharmacokinetic parameters for paracetamol (the subject of the overdose study), not acetylcysteine (which was the treatment agent). |
| popPK | Owens_2015 | irrelevant | 2 | 0 | The study focuses on a PK-PD model of paracetamol and its effect on INR, using N-acetylcysteine only as a covariate/antidote without reporting quantitative disposition parameters (CL, V, etc.) for acetylcysteine itself. |
| popPK | Permeisari_2022 | irrelevant | 2 | 0 | This is a review article that does not report original quantitative PK parameter values for acetylcysteine; it only qualitatively mentions a study showing decreased clearance in ESRD patients without providing the specific numbers. |
| popPK | Petkova_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for doxycycline, not acetylcysteine (N-acetylcysteine was only a co-administered probe/comparator). |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | The study focuses on radioprotection in salivary gland tissue chips and mice, using acetylcysteine only as a reference compound for assay validation, with no pharmacokinetic data reported. |
| popPK | San-Martín-Martínez_2022 | irrelevant | 2 | 0 | The paper is a narrative review discussing theoretical compartmental models for NAC, N-acetylcysteine, but does not report original quantitative PK parameter values (CL, V, ka) in the provided text. |
| popPK | Sbardelotto_2021 | irrelevant | 0 | 0 | The paper studies the antileukemic mechanisms of oncocalyxone A, and acetylcysteine is only used as a pre-treatment agent to test for radical-dependent effects, with no pharmacokinetic data reported. |
| popPK | Torresi_1985 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study examining the interaction between N-acetylcysteine and nitroglycerine on bovine coronary artery rings, not a pharmacokinetic study reporting disposition parameters for acetylcysteine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:28 UTC</sub>
