<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;filgrastim&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Filgrastim_Nikravesh2022_reference&quot;,&quot;label&quot;:&quot;Nikravesh_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_filgrastim/Filgrastim_Nikravesh2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# filgrastim

- **generic name:** filgrastim
- **ATC codes:** `L03AA02`
- **DrugBank:** [DB00099](https://go.drugbank.com/drugs/DB00099) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Filgrastim, a granulocyte colony-stimulating factor, is used to treat neutropenia and related blood disorders, and to support patients with cancers such as leukemia and lymphoma. It is widely used and appears on the WHO essential medicines list, with several products authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3151081](https://www.wikidata.org/wiki/Q3151081) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:50 | 14:17 | 1/1/1 | 1/0/1 | 0/0/0 | 241,769/15,742 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Nikravesh_2022_reference](drugs/drug_filgrastim/Filgrastim_Nikravesh2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Nikravesh FY et al., Extension of human GCSF serum half-life…, Scientific reports (2022) | [10.1038/s41598-021-04560-6](https://doi.org/10.1038/s41598-021-04560-6) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2001_reference](drugs/drug_filgrastim/Filgrastim_Wang2001_reference.md) | — | 1-compartment (no model) | 4 | Wang B et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2001) | [10.1023/a:1011534529622](https://doi.org/10.1023/a:1011534529622) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jiang_2025_reference](drugs/drug_filgrastim/Filgrastim_Jiang2025_reference.md) | — | 2-compartment (no model) | 5 | Jiang X et al., Population Pharmacokinetic-Pharmacodyna…, Clinical and translational… (2025) | [10.1111/cts.70121](https://doi.org/10.1111/cts.70121) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jiang_2025_CD34](drugs/drug_filgrastim/pd_Jiang_2025_CD34.md) | CD34+ cell count ← filgrastim · delayed effect through transit (transduction) compartments | — | Jiang X et al., Population Pharmacokinetic-Pharmacodyna…, Clinical and translational… (2025) | [10.1111/cts.70121](https://doi.org/10.1111/cts.70121) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2001_ANC](drugs/drug_filgrastim/pd_Wang_2001_ANC.md) | absolute neutrophil count ← Filgrastim · indirect response — drug stimulates the production of absolute neutrophil count | model (no simulator) | Wang B et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2001) | [10.1023/a:1011534529622](https://doi.org/10.1023/a:1011534529622) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=filgrastim) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CSF3R (stimulator), ELANE (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Krzyzanski_2010.pdf` | Krzyzanski W et al., Population modeling of filgrastim PK-PD…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270010376966](https://doi.org/10.1177/0091270010376966) | [20881223](https://pubmed.ncbi.nlm.nih.gov/20881223) | The study describes a population PK/PD model for filgrastim in humans, but specific quantitative parameter estimates (CL, V, etc.) are not listed in the provided text, likely residing in tables or figures not included. |
| `Wang_2001.pdf` | Wang B et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2001) | popPK | 10 | [10.1023/a:1011534529622](https://doi.org/10.1023/a:1011534529622) | [11677930](https://pubmed.ncbi.nlm.nih.gov/11677930) | The abstract provides specific numeric values for PK-PD parameters (Emax, EC50, Hill) and bioavailability, but does not list explicit numeric values for clearance (CL), volume of distribution (V), or half-life. |
| `Melhem_2018.pdf` | Melhem M et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2018) | popPK | 9 | [10.1111/bcp.13504](https://doi.org/10.1111/bcp.13504) | [29318653](https://pubmed.ncbi.nlm.nih.gov/29318653) | Reports a PK-PD model of filgrastim in humans with a specific systemic half-life value (2.6 h) in the text, though full population parameter estimates (CL, V, etc.) are likely in tables or supplementary material not fully visible. |
| `Stewart_2022.pdf` | Stewart AW et al., A prospective study of filgrastim pharm…, Pharmacotherapy (2022) | popPK | 9 | [10.1002/phar.2646](https://doi.org/10.1002/phar.2646) | [34767652](https://pubmed.ncbi.nlm.nih.gov/34767652) | The paper reports quantitative non-compartmental pharmacokinetic parameters (clearance, AUC, Cmax) for filgrastim in humans, with numeric values explicitly provided in the text. |
| `Wiczling_2009.pdf` | Wiczling P et al., Population pharmacokinetic modelling of…, Clinical pharmacokinetics (2009) | popPK | 9 | [10.2165/11318090-000000000-00000](https://doi.org/10.2165/11318090-000000000-00000) | [19902989](https://pubmed.ncbi.nlm.nih.gov/19902989) | The paper describes a population PK model for filgrastim in humans and reports specific parameters like bioavailability (69.1%) and Kd (16.38 pM), but standard quantitative disposition parameters like clearance (CL), volume (V), and half-life are described qualitatively or implied to be part of the model rather than explicitly listed as standalone numeric values in the provided text. |
| `Halpern_2002.pdf` | Halpern W et al., Albugranin, a recombinant human granulo…, Pharmaceutical research (2002) | popPK | 5 | [10.1023/a:1020917732218](https://doi.org/10.1023/a:1020917732218) | [12458679](https://pubmed.ncbi.nlm.nih.gov/12458679) | The study reports quantitative PK parameters (half-life, MRT, CL/F) for filgrastim as a comparator to Albugranin in mice and monkeys, with specific values provided in the abstract text. |
| `Khandoozi_2021.pdf` | Khandoozi SR et al., Biosimilarity Assessment of 2 Filgrasti…, Clinical pharmacology in dr… (2021) | popPK | 5 | [10.1002/cpdd.856](https://doi.org/10.1002/cpdd.856) | [32820861](https://pubmed.ncbi.nlm.nih.gov/32820861) | The paper reports standard PK metrics (Cmax, AUC, tmax, half-life) for a biosimilarity study but lacks compartmental parameters (CL, V, Q, ka) or population PK model estimates required for the specific extraction task. |

<sub>queue written 2026-10-06T22:48:16.567353+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of PEG-rHuMGDF, with filgrastim mentioned only as a co-administered agent that did not alter the subject drug's kinetics. |
| popPK | Halpern_2002 | relevant | 5 | 3 | The study reports quantitative PK parameters (half-life, MRT, CL/F) for filgrastim as a comparator to Albugranin in mice and monkeys, with specific values provided in the abstract text. |
| popPK | Khandoozi_2021 | irrelevant | 5 | 2 | The paper reports standard PK metrics (Cmax, AUC, tmax, half-life) for a biosimilarity study but lacks compartmental parameters (CL, V, Q, ka) or population PK model estimates required for the specific extraction task. |
| popPK | Krzyzanski_2010 | relevant | 10 | 0 | The study describes a population PK/PD model for filgrastim in humans, but specific quantitative parameter estimates (CL, V, etc.) are not listed in the provided text, likely residing in tables or figures not included. |
| popPK | Lack_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of AMD3100, and filgrastim is only mentioned as a co-administered agent or context, with no PK parameters reported for filgrastim itself. |
| popPK | Scholz_2012 | irrelevant | 5 | 1 | The paper describes a mechanistic PK/PD model structure for Filgrastim in humans but does not report numeric parameter values (CL, V, etc.) in the provided text, and it is not a population PK study. |
| popPK | Wiczling_2009 | relevant | 9 | 4 | The paper describes a population PK model for filgrastim in humans and reports specific parameters like bioavailability (69.1%) and Kd (16.38 pM), but standard quantitative disposition parameters like clearance (CL), volume (V), and half-life are described qualitatively or implied to be part of the model rather than explicitly listed as standalone numeric values in the provided text. |
| popPK | Zamboni_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of topotecan, with filgrastim used only as a co-administered agent for comparison, and no PK parameters for filgrastim are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:48 UTC</sub>
