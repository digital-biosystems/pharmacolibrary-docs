<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;isosorbide dinitrate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IsosorbideDinitrate_Taylor1980_reference&quot;,&quot;label&quot;:&quot;Taylor_1980_reference&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1980_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;IsosorbideDinitrate_Doyle1981_reference&quot;,&quot;label&quot;:&quot;Doyle_1981_reference&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Doyle1981_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;IsosorbideDinitrate_Straehl1985_reference&quot;,&quot;label&quot;:&quot;Straehl_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Straehl1985_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# isosorbide dinitrate

- **generic name:** isosorbide dinitrate
- **ATC codes:** `C01DA08`, `C05AE02`
- **DrugBank:** [DB00883](https://go.drugbank.com/drugs/DB00883)
- **groups:** approved, investigational

## About

**Description.** A vasodilator used in the treatment of angina pectoris. Its actions are similar to nitroglycerin but with a slower onset of action.

**Indication.** For the prevention of angina pectoris due to coronary artery disease.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 19:31 | 9:36 | 0/2/1 | 0/0/0 | 0/0/0 | 43,158/4,531 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Taylor_1980_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1980_reference.md) | Taylor T et al., Pharmacokinetics of isosorbide dinitrat…, Biopharmaceutics & drug dis… (1980) | [10.1002/bdd.2510010310](https://doi.org/10.1002/bdd.2510010310) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Doyle_1981_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Doyle1981_reference.md) | Doyle E et al., Pharmacokinetics of isosorbide dinitrat…, Journal of pharmaceutical s… (1981) | [10.1002/jps.2600701122](https://doi.org/10.1002/jps.2600701122) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Straehl_1985_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Straehl1985_reference.md) | Straehl P et al., Isosorbide dinitrate bioavailability, k…, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.150](https://doi.org/10.1038/clpt.1985.150) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isosorbide_dinitrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…vailability is highly variable (10% to 90%), with extensive first-pass metabolism in the l…”</sub> | prose |
| metabolism | liver | `CYP2E1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NPR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 45 matched, 34 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Platzer_1982.pdf` | Platzer R et al., Pharmacokinetics of intravenous isosorb…, Journal of pharmacokinetics… (1982) | popPK | 10 | [10.1007/BF01062541](https://doi.org/10.1007/BF01062541) | [7182455](https://pubmed.ncbi.nlm.nih.gov/7182455) | The paper reports quantitative pharmacokinetic parameters for isosorbide dinitrate, including terminal half-life (67 min) and total plasma clearance (1.6 L/min), directly in the text. |
| `Straehl_1985.pdf` | Straehl P et al., Isosorbide dinitrate bioavailability, k…, Clinical pharmacology and t… (1985) | popPK | 10 | [10.1038/clpt.1985.150](https://doi.org/10.1038/clpt.1985.150) | [4017416](https://pubmed.ncbi.nlm.nih.gov/4017416) | The paper reports quantitative PK parameters (Vss, t1/2, CL) for isosorbide dinitrate directly in the text. |
| `Taylor_1980.pdf` | Taylor T et al., Pharmacokinetics of isosorbide dinitrat…, Biopharmaceutics & drug dis… (1980) | popPK | 10 | [10.1002/bdd.2510010310](https://doi.org/10.1002/bdd.2510010310) | [7448342](https://pubmed.ncbi.nlm.nih.gov/7448342) | The text explicitly reports quantitative pharmacokinetic parameters including elimination half-life (9-10 min), systemic clearance (0.32 and 0.16 l min-1), and bioavailability (3%) for isosorbide dinitrate. |
| `Doyle_1981.pdf` | Doyle E et al., Pharmacokinetics of isosorbide dinitrat…, Journal of pharmaceutical s… (1981) | popPK | 9 | [10.1002/jps.2600701122](https://doi.org/10.1002/jps.2600701122) | [7299675](https://pubmed.ncbi.nlm.nih.gov/7299675) | The study reports quantitative PK parameters (half-lives, concentration data) for isosorbide dinitrate in non-human primates, but specific values for clearance and volume of distribution are not explicitly listed in the provided text. |
| `Assinder_1977.pdf` | Assinder DF et al., Plasma isosorbide dinitrate concentrati…, Journal of pharmaceutical s… (1977) | popPK | 8 | [10.1002/jps.2600660607](https://doi.org/10.1002/jps.2600660607) | [577507](https://pubmed.ncbi.nlm.nih.gov/577507) | The paper reports quantitative PK parameters including half-life (30-40 min), peak concentrations, and bioavailability for isosorbide dinitrate in humans, with values explicitly present in the text. |
| `Wallén_1993.pdf` | Wallén NH et al., Effects of an oral dose of isosorbide d…, British journal of clinical… (1993) | pd | 5 | [10.1111/j.1365-2125.1993.tb05680.x](https://doi.org/10.1111/j.1365-2125.1993.tb05680.x) | [8443032](https://www.ncbi.nlm.nih.gov/pubmed/8443032) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-20T19:22:13.970697+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bozinovski_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation and NO formation, not a pharmacokinetic study reporting disposition parameters for isosorbide dinitrate. |
| PGx | Frampton_1992 | not_relevant | 0 | 0 | The paper is a review of nicorandil's pharmacology and efficacy, mentioning isosorbide dinitrate only for comparative efficacy, and contains no pharmacogenomic data. |
| popPK | Henry_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nitrate tolerance in isolated coronary arteries, not a pharmacokinetic study, and reports no disposition parameters for isosorbide dinitrate. |
| popPK | Hu_2010 | irrelevant | 0 | 0 | The study is an imaging quality assessment of coronary MR imaging using isosorbide dinitrate as a vasodilator, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Issa_2006 | not_relevant | 0 | 0 | The paper is a policy and clinical case study on the approval of BiDil based on race as a surrogate marker, and does not report specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Kahn_2006 | not_relevant | 0 | 0 | The paper is a critical commentary on the marketing and race-specific approval of BiDil, not a study reporting pharmacogenomic effects on PK/PD parameters. |
| popPK | Kita_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of antianginal effects in animal models and does not report pharmacokinetic parameters for isosorbide dinitrate. |
| popPK | Kreye_1983 | irrelevant | 0 | 0 | The study focuses on hemodynamic and vascular relaxant effects (pharmacodynamics) rather than pharmacokinetic disposition parameters. |
| PGx | MacDonald_2009 | not_relevant | 0 | 0 | The paper investigates the chemopreventive effects of NO-aspirin 2 on carcinogen metabolism and only mentions isosorbide dinitrate as a comparative NO-donor, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | McNamara_2008 | not_relevant | 2 | 0 | The paper is a review that mentions racial differences in efficacy and a polymorphism affecting outcomes, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes for isosorbide dinitrate linked to a specific gene variant. |
| PGx | McNamara_2014 | not_relevant | 2 | 8 | The study reports a pharmacogenomic effect on clinical outcomes (composite score, QoL, survival) rather than a specific pharmacokinetic or pharmacodynamic parameter. |
| PGx | Minamiyama_1999 | not_relevant | 2 | 5 | The study investigates the role of CYP3A4 in nitric oxide formation but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Minamiyama_2002 | not_relevant | 0 | 0 | The study investigates the mechanism of nitrate tolerance via CYP450 degradation in rats, not the effect of a specific human gene variant or genotype on PK/PD parameters. |
| PGx | Minamiyama_2007 | not_relevant | 0 | 0 | The paper discusses the metabolic pathway of NO-aspirin and mentions isosorbide dinitrate only as background context, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Nahavandi_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aortic responsiveness to isosorbide dinitrate, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Otrompke_2007 | not_relevant | 0 | 0 | The text is a brief news summary of conference presentations and does not report specific pharmacogenomic effects or quantitative data for isosorbide dinitrate. |
| popPK | Sata_1997 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding isosorbide dinitrate. |
| popPK | Schröder_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on guanylate cyclase activation (EC50 values) and does not report pharmacokinetic disposition parameters for isosorbide dinitrate. |
| popPK | Shabanova_2005 | irrelevant | 0 | 0 | The paper studies platelet hypersensitivity to ADP and mentions isosorbide dinitrate only as an incubation agent, reporting no pharmacokinetic parameters. |
| PGx | Sontoredjo_2013 | not_relevant | 2 | 0 | The text is a general review of ethnicity in pharmacogenetics that mentions isosorbide dinitrate only as a clinical example of ethnic prescribing differences, without reporting specific gene variants or quantitative PK/PD parameters. |
| popPK | Sponer_1984 | irrelevant | 1 | 0 | The study focuses on isosorbide-5-mononitrate (a metabolite), not isosorbide dinitrate, as the subject drug. |
| popPK | Stiefel_1984 | irrelevant | 1 | 0 | The study focuses on in-vitro vasorelaxant effects and in-vivo hemodynamic responses (hypotension) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Straehl_1984 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of isosorbide mononitrates (IS-5-MN and IS-2-MN), with isosorbide dinitrate mentioned only as a qualitative comparator without providing quantitative PK parameters for it. |
| popPK | Taylor_1981 | irrelevant | 2 | 0 | The study reports quantitative pharmacokinetic parameters for isosorbide 5-mononitrate (the metabolite), not the subject drug isosorbide dinitrate, for which only qualitative comparisons and metabolite formation data are provided. |
| popPK | Vincent_1992 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic tolerance (venodilation) and does not report any pharmacokinetic parameters for isosorbide dinitrate. |
| PGx | Vuppugalla_2004 | not_relevant | 0 | 0 | The study investigates the effect of nitric oxide donors on CYP450 activity in rat livers and does not report any pharmacogenomic effects (gene variants) on the PK or PD of isosorbide dinitrate. |
| popPK | Wallén_1993 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Wallén_1993 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-20 19:22 UTC</sub>
