<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;nimesulide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nimesulide_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nimesulide/Nimesulide_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nimesulide_Gapiska2025_reference&quot;,&quot;label&quot;:&quot;Gapi\u0144ska_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nimesulide/Nimesulide_Gapiska2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nimesulide_Huang2025_reference&quot;,&quot;label&quot;:&quot;Huang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nimesulide/Nimesulide_Huang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nimesulide

- **generic name:** nimesulide
- **ATC codes:** `M01AX17`, `M02AA26`
- **DrugBank:** [DB04743](https://go.drugbank.com/drugs/DB04743) · **PubChem:** [CID 4495](https://pubchem.ncbi.nlm.nih.gov/compound/4495)
- **molar mass:** 308.31 g/mol (C13H12N2O5S) — DrugBank
- **groups:** approved, withdrawn

## About

Nimesulide is a non-steroidal anti-inflammatory drug used to treat pain and inflammation. It has been approved in some countries but withdrawn in others, reportedly over safety concerns including liver damage, so its availability varies by country.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20994](https://www.wikidata.org/wiki/Q20994) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:43 | 16:01 | 3/1/0 | 6/0/1 | 0/0/0 | 823,922/26,178 | einfracz / qwen3.8-27b | 28 | 6/18 | 28/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Dziubina_2026_reference](drugs/drug_nimesulide/Nimesulide_Dziubina2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Dziubina A et al., Searching for Mechanisms of Analgesic A…, Methods and protocols (2026) | [10.3390/mps9020041](https://doi.org/10.3390/mps9020041) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gapińska_2025_reference](drugs/drug_nimesulide/Nimesulide_Gapiska2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Gapińska N et al., Effect of SSR504734, a Selective Glycin…, ACS chemical neuroscience (2025) | [10.1021/acschemneuro.5c00039](https://doi.org/10.1021/acschemneuro.5c00039) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Huang_2025_reference](drugs/drug_nimesulide/Nimesulide_Huang2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Huang L et al., Enterohepatic Recirculation-Mediated Re…, Toxics (2025) | [10.3390/toxics13110919](https://doi.org/10.3390/toxics13110919) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rao_2007_reference](drugs/drug_nimesulide/Nimesulide_Rao2007_reference.md) | — | 1-compartment (no model) | 0 | Rao GS et al., Pharmacokinetics and bioavailability of…, Journal of veterinary pharm… (2007) | [10.1111/j.1365-2885.2007.00838.x](https://doi.org/10.1111/j.1365-2885.2007.00838.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bevilacqua_1994_O2](drugs/drug_nimesulide/pd_Bevilacqua_1994_O2.md) | production of the superoxide anion (O2-.) ← nimesulide · inhibition effect | — | Bevilacqua M et al., Nimesulide decreases superoxide product…, European journal of pharmac… (1994) | [10.1016/0922-4106(94)90067-1](https://doi.org/10.1016/0922-4106(94)90067-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Bevilacqua_1994_PDE_IV](drugs/drug_nimesulide/pd_Bevilacqua_1994_PDE_IV.md) | phosphodiesterase type IV ← nimesulide · inhibition effect | — | Bevilacqua M et al., Nimesulide decreases superoxide product…, European journal of pharmac… (1994) | [10.1016/0922-4106(94)90067-1](https://doi.org/10.1016/0922-4106(94)90067-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Facino_1993_MDA](drugs/drug_nimesulide/pd_Facino_1993_MDA.md) | MDA formation ← nimesulide · direct Emax (saturable) effect | — | Facino RM et al., Antioxidant activity of nimesulide and…, Drugs 46 Suppl (1993) | [10.2165/00003495-199300461-00005](https://doi.org/10.2165/00003495-199300461-00005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Facino_1993_hyaluronic_acid_depolymerisation](drugs/drug_nimesulide/pd_Facino_1993_hyaluronic_acid_depolymerisation.md) | hyaluronic acid depolymerisation ← nimesulide · direct Emax (saturable) effect | — | Facino RM et al., Antioxidant activity of nimesulide and…, Drugs 46 Suppl (1993) | [10.2165/00003495-199300461-00005](https://doi.org/10.2165/00003495-199300461-00005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [López-Villodres_2012_IL_10](drugs/drug_nimesulide/pd_L_pez_Villodres_2012_IL_10.md) | interleukin 10 ← nimesulide · stimulation effect | — | López-Villodres JA et al., Cytoprotective effect of nonsteroidal a…, European journal of pharmac… (2012) | [10.1016/j.ejps.2012.01.001](https://doi.org/10.1016/j.ejps.2012.01.001) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [López-Villodres_2012_LDH](drugs/drug_nimesulide/pd_L_pez_Villodres_2012_LDH.md) | lactate dehydrogenase (LDH) efflux ← nimesulide · direct Emax (saturable) effect | — | López-Villodres JA et al., Cytoprotective effect of nonsteroidal a…, European journal of pharmac… (2012) | [10.1016/j.ejps.2012.01.001](https://doi.org/10.1016/j.ejps.2012.01.001) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rasheed_2018_BSA_MG](drugs/drug_nimesulide/pd_Rasheed_2018_BSA_MG.md) | BSA-MG ← nimesulide · direct Emax (saturable) effect | — | Rasheed S et al., Drug repurposing: In-vitro anti-glycati…, PloS one (2018) | [10.1371/journal.pone.0190509](https://doi.org/10.1371/journal.pone.0190509) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rasheed_2018_BSA_glucose](drugs/drug_nimesulide/pd_Rasheed_2018_BSA_glucose.md) | BSA-glucose ← nimesulide · direct Emax (saturable) effect | — | Rasheed S et al., Drug repurposing: In-vitro anti-glycati…, PloS one (2018) | [10.1371/journal.pone.0190509](https://doi.org/10.1371/journal.pone.0190509) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">dog</span> | [Ricketts_1998_COX1](drugs/drug_nimesulide/pd_Ricketts_1998_COX1.md) | canine cyclooxygenase 1 ← nimesulide · direct sigmoid Emax (Hill) effect | — | Ricketts AP et al., Evaluation of selective inhibition of c…, American journal of veterin… (1998) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">dog</span> | [Ricketts_1998_COX2](drugs/drug_nimesulide/pd_Ricketts_1998_COX2.md) | canine cyclooxygenase 2 ← nimesulide · direct sigmoid Emax (Hill) effect | — | Ricketts AP et al., Evaluation of selective inhibition of c…, American journal of veterin… (1998) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Zhou_2017_uptake_transporters_of_d8_TCA_for_Na_taurocholate_cotransporting_polypeptide](drugs/drug_nimesulide/pd_Zhou_2017_uptake_transporters_of_d8_TCA_for_Na_taurocholate_.md) | uptake transporters of d8-TCA for Na+-taurocholate cotransporting polypeptide ← Nimesulide · inhibition effect | — | Zhou L et al., Nimesulide and 4'-Hydroxynimesulide as…, Drug metabolism and disposi… (2017) | [10.1124/dmd.116.074104](https://doi.org/10.1124/dmd.116.074104) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Zhou_2017_uptake_transporters_of_d8_TCA_for_organic_anion_transporting_proteins](drugs/drug_nimesulide/pd_Zhou_2017_uptake_transporters_of_d8_TCA_for_organic_anion_tr.md) | uptake transporters of d8-TCA for organic anion-transporting proteins ← Nimesulide · inhibition effect | — | Zhou L et al., Nimesulide and 4'-Hydroxynimesulide as…, Drug metabolism and disposi… (2017) | [10.1124/dmd.116.074104](https://doi.org/10.1124/dmd.116.074104) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Arfè_2016_HF](drugs/drug_nimesulide/pd_Arf_2016_HF.md) | hospital admission for heart failure ← nimesulide · categorical (graded) response model | — | Arfè A et al., Non-steroidal anti-inflammatory drugs a…, BMJ (Clinical research ed.) (2016) | [10.1136/bmj.i4857](https://doi.org/10.1136/bmj.i4857) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nimesulide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: LTF (inhibitor), PLA2G2E (unknown), PTGS2 (inhibitor), TNFSF10 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 211 matched, 85 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rao_2007.pdf` | Rao GS et al., Pharmacokinetics and bioavailability of…, Journal of veterinary pharm… (2007) | popPK | 10 | [10.1111/j.1365-2885.2007.00838.x](https://doi.org/10.1111/j.1365-2885.2007.00838.x) | [17348902](https://pubmed.ncbi.nlm.nih.gov/17348902) | The paper provides explicit numeric values for clearance, volume of distribution, and half-life for nimesulide in goats. |
| `Toutain_2001.pdf` | Toutain PL et al., A pharmacokinetic/pharmacodynamic appro…, Journal of veterinary pharm… (2001) | pd | 5 | [10.1046/j.1365-2885.2001.00304.x](https://doi.org/10.1046/j.1365-2885.2001.00304.x) | [11348486](https://www.ncbi.nlm.nih.gov/pubmed/11348486) | metadata signals extractable PD data (PK/PD) |
| `Abad_2001.pdf` | Abad MJ et al., Effects of furocoumarins from Cachrys t…, The Journal of pharmacy and… (2001) | pd | 4 | [10.1211/0022357011776432](https://doi.org/10.1211/0022357011776432) | [11518028](https://www.ncbi.nlm.nih.gov/pubmed/11518028) | metadata signals extractable PD data (IC50) |
| `Domínguez-Luis_2013.pdf` | Domínguez-Luis M et al., Superoxide anion mediates the L-selecti…, Biochemical pharmacology (2013) | pd | 4 | [10.1016/j.bcp.2012.10.024](https://doi.org/10.1016/j.bcp.2012.10.024) | [23142710](https://www.ncbi.nlm.nih.gov/pubmed/23142710) | metadata signals extractable PD data (IC50) |
| `Vago_1995.pdf` | Vago T et al., Effect of nimesulide action time depend…, Arzneimittel-Forschung (1995) | pd | 4 | not captured | [8595067](https://www.ncbi.nlm.nih.gov/pubmed/8595067) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T01:38:58.450530+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agyemang_2025 | irrelevant | 0 | 0 | The paper is a systematic review on the efficacy of diclofenac suppositories for pain management in Cesarean section patients, containing no pharmacokinetic parameters for nimesulide. |
| popPK | Aldasoro_2008 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study investigating vascular contraction, not a pharmacokinetic study. |
| PGx | Ambrosio_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of UGT2B7 by drugs including nimesulide) affecting morphine metabolism, rather than the effect of a gene variant on nimesulide's PK/PD. |
| popPK | Amirian_2023 | irrelevant | 0 | 0 | The paper is a data description of a text dataset for total joint arthroplasty and does not contain any pharmacokinetic study or parameters for nimesulide. |
| popPK | Autmizguine_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Trimethoprim-Sulfamethoxazole, not nimesulide. |
| popPK | Berti_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic activities (antianaphylactic and antihistaminic effects) of nimesulide in guinea pigs and does not report pharmacokinetic parameters. |
| popPK | Bouazza_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paracetamol (acetaminophen) in preterm infants, not nimesulide. |
| popPK | Brown_2025 | irrelevant | 0 | 0 | The study focuses on the design and biological evaluation of novel isatin conjugates for analgesic effects, not the pharmacokinetics of nimesulide. |
| popPK | Chang_2023 | irrelevant | 0 | 0 | The paper studies ALDH2 activators and obesity in mice, unrelated to nimesulide pharmacokinetics. |
| popPK | Dapino_1994 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of nimesulide on neutrophil migration and adherence in vitro, with no pharmacokinetic parameters reported. |
| popPK | Dodeja_2026 | irrelevant | 0 | 0 | The paper is a review on drug transfer into human milk and does not report quantitative pharmacokinetic parameters for nimesulide. |
| popPK | Dziubina_2026 | irrelevant | 0 | 0 | The study evaluates pharmacokinetic parameters for novel pyrrolo[3,4-c]pyridine derivatives (DSZ-13 and DSZ-19), not nimesulide. |
| popPK | Ergün_2025 | irrelevant | 0 | 0 | The paper is a biophysical study on FRET and protein-ligand binding of NSAIDs (naproxen, indomethacin, carprofen) to human serum albumin, not a pharmacokinetic study of nimesulide. |
| popPK | Gapińska_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SSR504734, not nimesulide. |
| popPK | Gyunesh_2025 | irrelevant | 0 | 0 | The paper describes an image analysis tool for trophoblast invasion in an in vitro model and contains no pharmacokinetic data for nimesulide. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aristolochic acid I in rats, not nimesulide. |
| popPK | Karadas_2004 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on myometrial contractions, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Karadas_2004_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of myometrial contraction and ductus arteriosus constriction, reporting no pharmacokinetic parameters for nimesulide. |
| popPK | Kaya_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of intestinal contractility in rats, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Kaya_2004 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of nimesulide as a cyclooxygenase inhibitor in guinea pigs, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Koush_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of indomethacin, not nimesulide. |
| popPK | Krzyzanski_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for indomethacin, not nimesulide. |
| popPK | Lan_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study of airway smooth muscle relaxation in mouse trachea where nimesulide is used only as a COX-2 inhibitor tool, not as a subject drug for PK characterization. |
| popPK | Larsson_2026 | irrelevant | 0 | 0 | The paper is a computational study on active drug metabolites and does not report pharmacokinetic parameters for nimesulide. |
| popPK | Lees_2004 | irrelevant | 2 | 0 | This is a review article that discusses PK-PD principles for nimesulide in dogs but does not report original quantitative PK parameter values in the text provided. |
| PGx | Masubuchi_2008 | not_relevant | 0 | 0 | The study examines the effect of inflammation (TNBS colitis) on P450 enzyme expression and the protective effect of nimesulide on enzyme levels, but does not report genetic variants or genotypes affecting nimesulide's PK/PD. |
| popPK | Mingatto_2000 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of mitochondrial effects and does not report any pharmacokinetic parameters. |
| popPK | Munn_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carprofen in sheep, not nimesulide. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators and radiation injury, with no mention of nimesulide or its pharmacokinetics. |
| popPK | Padavia_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for paracetamol (acetaminophen) in neonates, not nimesulide. |
| popPK | Pagán-Busigó_2022 | irrelevant | 0 | 0 | The paper is a systematic review on CRH antagonists for pelvic/abdominal diseases and contains no information on nimesulide pharmacokinetics. |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | The study focuses on membrane transporter modulators (ABC/SLC) and does not investigate the pharmacokinetics of nimesulide. |
| popPK | Revankar_2023 | irrelevant | 0 | 0 | The paper focuses on the in-vitro and computational analysis of Urolithin A, a different compound, and does not contain any pharmacokinetic data for nimesulide. |
| popPK | Saito_2025 | irrelevant | 0 | 0 | The study is a disproportionality analysis of adverse drug reactions (pharmacovigilance) involving VEGF inhibitors and NSAIDs, and does not report any pharmacokinetic parameters for nimesulide. |
| popPK | Simeoli_2022 | irrelevant | 0 | 0 | The paper is a review of antibiotic pharmacokinetics in preterm newborns and does not contain any data or parameters for nimesulide. |
| popPK | Slattery_2001 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of uterine relaxant effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Somani_2016 | irrelevant | 0 | 0 | The study evaluates PK parameters for paracetamol, theophylline, indomethacin, and ibuprofen, but does not include nimesulide. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on the use of statins for COVID-19 treatment and contains no pharmacokinetic data for nimesulide. |
| popPK | Tavares_2001 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of gastric acid secretion, not a pharmacokinetic study, and reports no PK parameters for nimesulide. |
| popPK | Tong_2022 | irrelevant | 0 | 0 | The paper is a pharmacokinetic study of gentamicin in neonates, not nimesulide. |
| popPK | Toutain_2001 | irrelevant | 0 | 0 | no_text gate: only 195 chars of text extracted (&lt; 400) |
| popPK | Verma_2026 | irrelevant | 0 | 0 | The paper describes a mathematical model of ocular surface ion and water transport in mice for dry eye disease and contains no data or mention of nimesulide. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ionic currents in cell lines and does not report pharmacokinetic parameters for nimesulide. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper describes a clinical trial and preclinical study of mesothelin-targeted CAR-T cells for cancer treatment and does not contain any pharmacokinetic data for nimesulide. |
| popPK | Yeung_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of indomethacin, not nimesulide. |
| PGx | Zhou_2015 | not_relevant | 0 | 0 | The paper investigates metabolic bioactivation pathways and cytotoxicity but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | de_2021 | irrelevant | 0 | 0 | This is a mechanistic cardiovascular study in rats where nimesulide acts as a COX-2 inhibitor treatment, not a pharmacokinetic study of the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:38 UTC</sub>
